from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from pymongo import MongoClient

app =    FastAPI()

conn = MongoClient("mongodb+srv://25ikbalhossain:%401510778084@cluster0.mqchwof.mongodb.net/myDatabase?retryWrites=true&w=majority")

app.mount("/static",StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")



"""docs= conn.notes.notes.find({})
    newDocs = []
    for doc in docs:
        newDocs.append({
            "id":doc["_id"],
            "note": doc["note"],
        })
    print(docs)"""
    


