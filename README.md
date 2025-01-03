# Projet Medica

## Membres du Groupe
- **BOKOU BOUNA ANGE LARISSA**
- **BOUOGNONG MOUOPE STEFAN**
- **KONI ONAMBELE BRYAN**
- **WATO MABOU PAUL**
- **WIRNGO OBED BONGLAV**


## Lien de l'application(medica)
[Liens vers medica](http://medica.smartcloudservices.cloud/)

## Dépôt GitHub
[Liens vers le dépôt GitHub du projet](https://github.com/Obed47/medica)

## Description
Medica est une application de consultation médicale virtuelle composée de plusieurs services :
- **Frontend** : Une interface utilisateur construite avec React.
- **Backend** : Deux services Django REST API (authentification et consultation).
- **Chatbot** : Un assistant médical interactif basé sur Chainlit et LangChain, connecté à une base de données PostgreSQL.

---

## Structure du projet

### Frontend (React)
- **Technologies** : React, JavaScript.
- **Fonctionnalités principales** :
  - Interface utilisateur intuitive.
  - Intégration avec les services backend via des appels API.
- **Démarrage local** :
  ```bash
  cd frontend
  npm install
  npm start
  ```
- **Build pour la production** :
  ```bash
  npm run build
  ```

### Backend (Django)
- **Services** :
  1. **Service Authentification** :
     - Projet : `authentification`
     - Application : `app`
     - Fonctionnalités :
       - Gestion des utilisateurs.
       - Sécurisation des API avec des tokens.
  2. **Service Consultation** :
     - Projet : `medica`
     - Application : `historic_app`
     - Fonctionnalités :
       - Gestion des consultations historiques.
       - Récupération des données utilisateur.
- **Démarrage local** :
  ```bash
  cd backend
  # Service Authentification
  python manage.py runserver 8001

  # Service Consultation
  python manage.py runserver 8002
  ```
- **Migration des bases de données** :
  ```bash
  python manage.py makemigrations
  python manage.py migrate
  ```

### Chatbot (Medica)
- **Technologies** :
  - FastAPI pour la capture des paramètres utilisateur.
  - Chainlit et LangChain pour l’interaction utilisateur.
  - PostgreSQL pour stocker les consultations.
- **Fonctionnalités principales** :
  - Enregistrement des symptômes et des maladies.
  - Génération de conseils médicaux adaptés.
- **Démarrage local** :
  ```bash
  # Lancer le service FastAPI
  uvicorn main:app --reload

  # Lancer le chatbot
  chainlit run Medica.py -w
  ```

---

## Configuration Nginx

Tous les services sont hébergés sur un seul VPS avec la configuration suivante :
- **Frontend** : Servi directement via Nginx depuis le dossier `build` de React.
- **Backend** : Reverse proxy vers les services Django tournant sur les ports `8001` et `8002`.
- **Chatbot** : Reverse proxy vers les services FastAPI et Chainlit.

### Exemple de fichier de configuration Nginx :
```nginx
server {
    listen 80;
    server_name medica.cloud;

    # Frontend React
    root /var/www/react-app;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    # Service Authentification
    location /auth/ {
        proxy_pass http://127.0.0.1:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Service Consultation
    location /consultation/ {
        proxy_pass http://127.0.0.1:8002;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Chatbot (FastAPI)
    location /api/ {
        proxy_pass http://127.0.0.1:8003;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Chatbot (Chainlit)
    location /chat/ {
        proxy_pass http://127.0.0.1:8004;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## Gestion des bases de données
- **Base de données principale** : PostgreSQL.
- **Tables importantes** :
  - `consultation` : Pour enregistrer les consultations.
  - `userprofile` : Pour stocker les données utilisateur (allergies, maladies héréditaires, etc.).

---

## Déploiement
- **Hébergement** : VPS avec Nginx comme reverse proxy.
- **Processus de déploiement** :
  1. Déployer le frontend React (écraser le dossier `build` sur le VPS).
  2. Lancer les services Django (via `gunicorn` ou directement).
  3. Lancer FastAPI et Chainlit.
  4. Configurer Nginx et redémarrer le service.


---

## Notes et Améliorations futures
- Intégrer HTTPS pour sécuriser toutes les communications.
- Optimiser le modèle du chatbot pour des réponses plus rapides.
- Ajouter un système de logs pour surveiller les activités et les erreurs.
