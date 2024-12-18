# ordonnances/serializers.py
from rest_framework import serializers
from .models import consultation
#le serializer permet de convertir les objets du modele en format json pour quitter du backend a la vue

class ConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = consultation
        fields = '__all__' 