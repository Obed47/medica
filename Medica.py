# Prompts
from langchain.prompts import ChatPromptTemplate
from langchain.schema import StrOutputParser
from langchain.schema.runnable.config import RunnableConfig
# modele
import os
from langchain_groq import ChatGroq

import chainlit as cl

import json

os.environ["GROQ_API_KEY"] = "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"

from collections import defaultdict

# memoire globale pour les users, on peut utiliser une base de données pour qu'elle soit consistante 
user_memory = defaultdict(list)

@cl.on_chat_start
async def on_chat_start():

    # On obtient l'id de l'utilisateur ou dumoins de sa session
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
        model="mixtral-8x7b-32768",
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
                ton rôle est de fournir des réponses précises en 2 ou 3 lignes, directement liées à la question posée et aux questions précédentes.
                Voici les données de base du patient : allergies {user_data['allergies']} et maladies héréditaires {user_data['maladies']}.
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
        user_memory[user_id].append({"role": "assistant", "content": chunk})
        await msg.stream_token(chunk)

    await msg.send()
