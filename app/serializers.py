from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth.models import User


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields= ["first_name", "last_name", "date_naissance", "maladie_hereditaire", "allergies", 'add_email']
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')