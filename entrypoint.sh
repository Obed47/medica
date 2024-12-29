#!/bin/bash

set -e 

source /env/bin/activate 

exec python3 manage.py makemigrations 
exec python3 manage.py migrate 
 
if [ $1 == 'gunicorn' ]; then 

    exec gunicorn django_invoice.wsgi:application -b 0.0.0.0:800

else 

    exec python3 manage.py runserver 0.0.0.0:8000 

fi 