from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ConsultationViewSet

router = DefaultRouter()
router.register('consultations', ConsultationViewSet, 'consultation')

urlpatterns = [
    path('', include(router.urls)),
]