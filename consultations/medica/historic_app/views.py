from django.shortcuts import render
from rest_framework import viewsets
from .models import Ordonnance
from .serializers import OrdonnanceSerializer
# Create your views here: definir la logique api grace aux views.


class OrdonnanceViewSet(viewsets.ModelViewSet):
    serializer_class = OrdonnanceSerializer
    queryset = Ordonnance.objects.all()


# 6 views creé list, create, retrieve, update, partial_update et destroy grace à OrdonnanceViewSet
# qui herite de viewsets.ModelViewSet