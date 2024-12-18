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
    maladie_hereditaire = models.TextField(blank=True, null=True)  # Permettre null et vide
    allergies = models.TextField(blank=True, null=True, help_text="Séparez chaque allergie par une virgule")  # Permettre null et vide
    add_email = models.EmailField(max_length=255, blank=False, null=False)

    def __str__(self):
        return f"Profil de {self.user.username}"
    
    class Meta:
        db_table = 'userprofile'
        ordering = ('-id',)


class consultation(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    symptome= models.CharField(max_length=255, null=False, blank=False)
    maladie = models.CharField(max_length=255, blank=True)
    traitement = models.CharField(max_length=255,)
    conseil = models.TextField(max_length=255, blank=True, null= False)
    date_consultation= models.DateTimeField(blank=True)
    
    class Meta:
        db_table = 'consultation'
        ordering = ('-id',)



    
