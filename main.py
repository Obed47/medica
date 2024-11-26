from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
import json

app = FastAPI()

CONFIG_FILE = "config.json"

def write_to_json(data):
    """Écrire les données dans un fichier JSON."""
    with open(CONFIG_FILE, "w") as f:
        json.dump(data, f, indent=4)

@app.get("/params")
async def get_params(request: Request):
    """Capture les paramètres depuis l'URL et les écrit dans un fichier JSON."""
    query_params = dict(request.query_params)
    
    # Si aucun paramètre n'est fourni, ne pas modifier le fichier JSON
    if not query_params:
        return {"message": "Aucun paramètre fourni"}

    # Écrire les paramètres dans le fichier JSON
    write_to_json(query_params)
    #return {"message": "Paramètres écrits dans config.json", "data": query_params}, 
    return RedirectResponse(url="http://127.0.0.1:8001")
    


@app.get("/")
async def redirect_to_params():
    """Redirige automatiquement vers une URL exemple"""
    return RedirectResponse(
        "/params?nom=Jean&allergies=pollen,arachides&maladies=Asthme"
    )
