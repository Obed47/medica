from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Ordonnance(models.Model):
    disease = models.CharField(max_length=255)
    medicine = models.CharField(max_length=255)
    precaution = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

#Si votre projet nécessite un backend complexe (comme avec Django ou Django REST Framework),
#P vous devrez peut-être combiner Vercel avec une autre solution pour héberger votre backend, comme Render, Heroku, ou un hébergement VPS.