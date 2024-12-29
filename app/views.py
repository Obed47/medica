from authentification import settings 
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.core.mail import send_mail
from .models import UserProfile, PasswordResetCode 
import random 
from django.http import JsonResponse
import json
from rest_framework import generics
from .serializers import UserProfileSerializer
from django.views.decorators.csrf import csrf_exempt
import re
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer


# ------------------------------------


class UserProfileListCreate(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    
     
    def perform_create(self, serializer):
        user_email = self.request.data.get('add_email')
        
        user, created = User.objects.get_or_create(
            email=user_email,
            defaults={
                'username': user_email.split('@')[0],  # Créer un nom d'utilisateur à partir de l'email
                'password': User.objects.make_random_password(),   # Définir un mot de passe par défaut
            }
        )

        # Associer le profil à l'utilisateur
        serializer.save(user=user)
                                                        
    
class UserProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset= UserProfile.objects.all()
    serializer_class= UserProfileSerializer
    
   

# ------------------------------------

def home(request):
    # Renvoie un message de bienvenue
    return JsonResponse({"message": "Bienvenue sur Stefan Medica!"})



def verifefier_email(email):
    pattern= r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$'
    return re.match(pattern, email) is not None


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(**request.data)
        serializer.validated_data['password'] = User.set_password(request.data['password'])
        
        if serializer.is_valid():
            user = User.objects.create(**serializer.validated_data)
            user = authenticate(username=user.username, password=request.data['password'])
            
         
        if user :
            login(request,user)   
        token = RefreshToken(user)
        
        return Response({token},status=status.HTTP_201_CREATED)


from rest_framework.exceptions import NotFound

class UpdateUserProfileView(APIView):
    permission_classes = [IsAuthenticated]
   
    def patch(self, request, *args, **kwargs):
        user = request.user
        
        # Vérifiez si le profil existe, sinon créez-le
        user_profile, created = UserProfile.objects.get_or_create(user=user)
        
        # Récupération des données envoyées
        maladie_hereditaire = request.data.get('maladie_hereditaire', "")
        allergies = request.data.get('allergies', "")
        
        print(f"Maladie héréditaire: {maladie_hereditaire}")
        print(f"Allergies: {allergies}")
        
        # Mise à jour des champs dans le profil
        if maladie_hereditaire:
            user_profile.maladie_hereditaire = maladie_hereditaire
        if allergies:
            user_profile.allergies = allergies
        
        # Sauvegarde des modifications
        user_profile.save()
        
        if created:
            return Response({"message": "Profil créé et mis à jour avec succès"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "Profil mis à jour avec succès"}, status=status.HTTP_200_OK)



@csrf_exempt
def register(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)  # Utiliser JSON pour récupérer les données
        except json.JSONDecodeError:
            return JsonResponse({"error": "Les données envoyées ne sont pas valides en JSON."}, status=400)
        
        username = data.get("username")
        firstname = data.get("first_name")
        lastname = data.get("last_name")
        date_naissance = data.get("date_naissance")
        email = data.get("add_email")
        password = data.get("password")
        password1 = data.get("password1")

        allergies = data.get("allergies")
        allergies_str = ', '.join(allergies.split(',')) if allergies else None
        maladie_hereditaire = data.get("maladie_hereditaire")
        maladie_hereditaire_str = ', '.join(maladie_hereditaire.split(',')) if maladie_hereditaire else None

      
        
        if not verifefier_email(email):
            return JsonResponse({"error": "veillez entrer une adresse valide"}, status=400)

        # Vérifications de validation
        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "Ce nom d'utilisateur existe déjà."}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({"error": "Cet email possède déjà un compte."}, status=400)

        if password != password1:
            return JsonResponse({"error": "Les deux mots de passe ne correspondent pas."}, status=400)

        # Création de l'utilisateur
        user = User.objects.create_user(username=username, email=email, password=password)
        user.first_name = firstname
        user.last_name = lastname
        user.save()

        # Création du profil utilisateur
        UserProfile.objects.create(
          user=user,
            first_name=firstname,
            last_name=lastname,
            date_naissance=date_naissance,
            maladie_hereditaire=maladie_hereditaire_str,
            allergies=allergies_str,
            add_email=email
        )
        
        userAUth = authenticate(username=user.username, password=password)

            
         
        if userAUth :
            # request.data['user']= user
            login(request,userAUth)   
        token = RefreshToken.for_user(user)
        
        
        # Envoi de l'email de bienvenue
        subject = "Bienvenue sur Stefan Medica Django System Login"
        message = f"Bienvenue {firstname} {lastname} \nNous sommes heureux de vous compter parmi nous.\n\nMerci,\nStefan Medica"
        send_mail(subject, message, settings.EMAIL_HOST_USER, [email], fail_silently=False)

        return JsonResponse({"success": "Votre compte a été créé avec succès.", "user_id":user.id,"token":str(token.access_token)}, status=201)

    return JsonResponse({"error": "Méthode non autorisée."}, status=405)


@csrf_exempt
def logIn(request):
    # Connexion d'un utilisateur
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")

        try:
            user = User.objects.get(email=email)
            user = authenticate(username=user.username, password=password)
            if user is not None:
                login(request, user)
                
                token = RefreshToken.for_user(user)
        
        
        # Envoi de l'email de bienvenue
                subject = "Bienvenue sur Stefan Medica Django System Login"

                return JsonResponse({"success": "utlisATEUR CONNECTE.","token":str(token.access_token)}, status=201)

                
            else:
                return JsonResponse({"error": "Email ou mot de passe incorrect."}, status=401)
        except User.DoesNotExist:
            return JsonResponse({"error": "Cet email n'est associé à aucun compte."}, status=404)

    return JsonResponse({"error": "Méthode non autorisée."}, status=405)

def logOut(request):
    # Déconnexion de l'utilisateur
    logout(request)
    return JsonResponse({"success": "Vous avez bien été déconnecté."})


@csrf_exempt
def send_verification_code(request):
    # Envoie un code de vérification pour réinitialiser le mot de passe
    
    if request.method == 'POST':
        data= json.loads(request.body)
        email =data.get("email")
        print("Email reçu :", email)
        
        try:
            user_profile = UserProfile.objects.get(add_email=email)
            user = user_profile.user
            code = f"{random.randint(100000, 999999)}" 
            PasswordResetCode.objects.create(user=user_profile.user, code=code)
            
            # Envoie du code par email
            send_mail(
                "Code de vérification pour réinitialiser le mot de passe",
                f"Votre code de vérification est: {code}",
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False
            )
            
            return JsonResponse({"success": "Un code de vérification a été envoyé à votre adresse email."}, status=200)
        except UserProfile.DoesNotExist:
            return JsonResponse({"error": "Aucun compte associé à cet email"}, status=404)
    return JsonResponse({"error": "Méthode non autorisée."}, status=405)

@csrf_exempt
def verify_code(request):
    data= json.loads(request.body)
    # Vérifie le code de réinitialisation et met à jour le mot de passe
    if request.method == "POST":
        email = data.get("email")
        code = data.get("code")
        new_password = data.get("new_password")
        
        try:
            user = User.objects.get(email=email)
            reset_code = PasswordResetCode.objects.filter(user=user, code=code).first()
            
            if reset_code and reset_code.is_valid():
                user.set_password(new_password)
                user.save()
                update_session_auth_hash(request, user)  # Maintient la session si connecté
                reset_code.delete()  # Supprime le code après utilisation 
                return JsonResponse({"success": "Votre mot de passe a été réinitialisé avec succès."}, status=200)
            else:
                return JsonResponse({"error": "Code de vérification invalide ou expiré"}, status=400)
        except User.DoesNotExist:
            return JsonResponse({"error": "Aucun compte associé à cet email"}, status=404)
    return JsonResponse({"error": "Méthode non autorisée."}, status=405)
