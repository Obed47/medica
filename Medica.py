# Prompts
from langchain.prompts import ChatPromptTemplate
from langchain.schema import StrOutputParser
from langchain.schema.runnable.config import RunnableConfig
# modele
import os
from langchain_groq import ChatGroq

import chainlit as cl

import json
import re
from collections import defaultdict

os.environ["GROQ_API_KEY"] = "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"

# Mémoire globale pour les utilisateurs et données de consultation
user_memory = defaultdict(list)
user_consultation = defaultdict(lambda: {
    "symptomes": [],
    "maladie": [],
    "traitement": [],
    "conseil": [],
})

# Extraction des données pertinentes
def extract_symptoms(text):
    return re.findall(r"\bsymptômes? : (.+?)[\.]", text)

def extract_diseases(text):
    return re.findall(r"\bmaladie[s]? : (.+?)[\.]", text)

def extract_treatment(text):
    return re.findall(r"\btraitement[s]? : (.+?)[\.]", text)

def extract_conseil(text):
    return re.findall(r"\bconseil[s]? : (.+?)[\.]", text)

# Sauvegarder ou afficher les données de consultation
def save_or_display_consultation(user_id):
    consultation = user_consultation[user_id]
    
    # Affichage dans le terminal
    print(f"Consultation pour l'utilisateur {user_id}:")
    print(f"Symptômes : {', '.join(consultation['symptomes'])}")
    print(f"Maladies trouvées : {', '.join(consultation['maladie'])}")
    print(f"Traitements proposés : {', '.join(consultation['traitement'])}")
    print(f"Conseils : {', '.join(consultation['conseil'])}")

    # Exemple de sauvegarde dans un fichier JSON (remplacer par une base de données si nécessaire)
    with open(f"consultation_{user_id}.json", "w") as f:
        json.dump(consultation, f, indent=4)

@cl.on_chat_start
async def on_chat_start():
    user_id = cl.user_session.get("id", "default_user")
    
    # Initialiser les données utilisateur
    if user_id not in user_memory:
        user_memory[user_id] = []

    with open('config.json', 'r') as file:
        data = json.load(file)

    try:
        user_data = data
    except Exception as e:
        user_data = {
            "nom": "Utilisateur",
            "allergies": ["gluten", "lactose"],
            "maladies": ["Cancer", "Palu"],
        }
        print(f"Erreur lors de la récupération des données : {e}")

    salutation = f"Salut {user_data['nom']}, Je suis Medica, votre assistant virtuel médical. Que puis-je faire pour vous aujourd'hui ?"
    await cl.Message(content=salutation).send()

    model = ChatGroq(
        model="llama-3.3-70b-versatile",
        temperature=0,
        max_tokens=None,
        timeout=None,
        max_retries=2,
    )

    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                f"""
                Tu es Medica, un assistant médical virtuel.
                Ton rôle est de fournir des réponses précises en 1 ou 2 lignes, directement liées à la question posée et aux questions précédentes.
                Pose toujours 4 ou 5 questions courtes pour obtenir des détails sur l'état du patient.
                Voici les données de base du patient : allergies {user_data['allergies']} et maladies héréditaires {user_data['maladies']}.
                Ces données sont confidentielles et ne doivent jamais apparaître dans tes réponses.

                Une fois la consultation terminée(après avoir posé 4 ou 5 questions plus de détails), tu finiras par un rapport sous la forme (toujours donner une ou plusieurs maladies probable en mentinnant juste le nom de la maladie):
                Consultation terminée. Résumé :
                    Symptômes : liste des symptôme.
                    Maladie : Maladie(s) possibles.
                    Traitement : Traitement le mieux adapté selon la maladie.
                    Conseil : Quelques conseils.
                """,
            ),
            ("human", "{question}"),
        ]
    )
    runnable = prompt | model | StrOutputParser()
    cl.user_session.set("runnable", runnable)
    cl.user_session.set("user_id", user_id)

@cl.on_message
async def on_message(message: cl.Message):
    user_id = cl.user_session.get("user_id", "default_user")
    runnable = cl.user_session.get("runnable")

    # Ajouter le message utilisateur dans l'historique
    user_memory[user_id].append({"role": "user", "content": message.content})

    msg = cl.Message(content="")

    # Ajouter le contexte des messages précédents
    context = "\n".join(
        [f"{entry['role']}: {entry['content']}" for entry in user_memory[user_id]]
    )

    async for chunk in runnable.astream(
        {"question": context},
        config=RunnableConfig(callbacks=[cl.LangchainCallbackHandler()]),
    ):
        # Ajouter la réponse dans l'historique
        user_memory[user_id].append({"role": "Medica", "content": chunk})

        await msg.stream_token(chunk)

    await msg.send()

    # Si la consultation est terminée
    if "consultation terminée" in msg.content.lower():
        # Extraire des données pertinentes
        user_consultation[user_id]["symptomes"].extend(extract_symptoms(msg.content.lower()))
        user_consultation[user_id]["maladie"].extend(extract_diseases(msg.content.lower()))
        user_consultation[user_id]["traitement"].extend(extract_treatment(msg.content.lower()))
        user_consultation[user_id]["conseil"].extend(extract_conseil(msg.content.lower()))

        save_or_display_consultation(user_id)

        user_consultation[user_id]["symptomes"] = []
        user_consultation[user_id]["maladie"] = []
        user_consultation[user_id]["traitement"] = []
        user_consultation[user_id]["conseil"] = []
