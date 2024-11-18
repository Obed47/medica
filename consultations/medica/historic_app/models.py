from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Ordonnance(models.Model):
    disease = models.CharField(max_length=255)
    medicine = models.CharField(max_length=255)
    precaution = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)