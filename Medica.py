# Prompts
from langchain.prompts import ChatPromptTemplate
from langchain.schema import StrOutputParser
from langchain.schema.runnable import Runnable
from langchain.schema.runnable.config import RunnableConfig
# modele
import os
from langchain_groq import ChatGroq

import chainlit as cl
import requests

import json
from urllib.parse import urlencode

os.environ["GROQ_API_KEY"] = "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"

@cl.on_chat_start
async def on_chat_start():

    
    # Lecture du fichier JSON
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
                Tu es medica un assistant Medical virtuel.
                ton rôle est de fournir des reponses precises en 2 ou 3 lignes, directement lié à la question posé et au question précedentes.
                Reponds toujours dans un cadre medical sauf si le contexte change.
                Tu devras poser 2 ou 3 questions pour avoir les détails sur l'etat du patient et après lui fournir un fournir un diagnostique complet (maladie, medicaments et posologie et enfin des conseils pour se sentir).
                Propose toujours un traitement (medicaments adequats selon la maladie trouvé)
                A la fin de chaque consultation, precise au patient que tu n'es pas un vrai docteur et conseille lui de consulter un vrai medecin pour confirmer ces resultats.
                Voici les données de base du patient : allergies {user_data['allergies']} et maladies hérediatires {user_data['maladies']}.
                Ces informations sont confidentiel et ne doivent pas apparapitre dans tes reponses, bases toi sur ça çour être precis
                """,
                
            ),
            ("human", "{question}"),
        ]
    )
    runnable = prompt | model | StrOutputParser()
    cl.user_session.set("runnable", runnable)

@cl.on_message
async def on_message(message: cl.Message):
    runnable = cl.user_session.get("runnable")  # type: Runnable

    msg = cl.Message(content="")

    async for chunk in runnable.astream(
        {"question": message.content},
        config=RunnableConfig(callbacks=[cl.LangchainCallbackHandler()]),
    ):
        pass
        await msg.stream_token(chunk)

    await msg.send()