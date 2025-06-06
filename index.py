from fastapi import APIRouter, FastAPI, Request
from fastapi.responses import HTMLResponse
from routes.contact import contact
from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List, Optional   
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles 
from config.db import conn


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(contact)

