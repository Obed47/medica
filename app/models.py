from django.db import models
from django.contrib.auth.models import User,AbstractUser
import uuid 
from django.utils import timezone 
from datetime import timedelta  

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, null=False, blank=False)
    last_name = models.CharField(max_length=255, blank=False, null=False)
    date_naissance = models.DateField(null=False, blank=False)  # non null et non vide
    maladie_hereditaire = models.CharField(max_length=100, blank=True, null=True)  # Permettre null et vide
    allergies = models.TextField(blank=True, null=True, help_text="Séparez chaque allergie par une virgule")  # Permettre null et vide
    add_email = models.EmailField(max_length=255, blank=False, null=False)

    def __str__(self):
        return f"Profil de {self.user.username}"



class PasswordResetCode(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=6, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    
    def is_valid(self):
        return timezone.now() < self.created_at + timedelta(minutes=15) #code valide 15 minutes
    
    