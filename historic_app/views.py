from django.shortcuts import render
from rest_framework import viewsets
from .models import consultation
from .serializers import ConsultationSerializer
# Create your views here: definir la logique api grace aux views.


class ConsultationViewSet(viewsets.ModelViewSet):
    serializer_class = ConsultationSerializer
    queryset = consultation.objects.all()


# 6 views creé list, create, retrieve, update, partial_update et destroy grace à OrdonnanceViewSet
# qui herite de viewsets.ModelViewSet