# Generated by Django 5.0.4 on 2024-12-16 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_consultation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='consultation',
            name='date_consultation',
            field=models.DateTimeField(blank=True),
        ),
    ]