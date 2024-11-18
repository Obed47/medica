# ordonnances/serializers.py
from rest_framework import serializers
from .models import Ordonnance
#le serializer permet de convertir les objets du modele en format json pour quitter du backend a la vue

class OrdonnanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ordonnance
        fields = '__all__' 