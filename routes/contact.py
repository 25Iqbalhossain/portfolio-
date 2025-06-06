
from model import contact
from fastapi import  APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.templating import Jinja2Templates
from config.db import conn
from schemas.contact import contactEntity
templates = Jinja2Templates(directory="templates")
from model.contact import Conn

contact = APIRouter()

@contact.get("/",response_class=HTMLResponse)
async def read_item(request:Request):
    return templates.TemplateResponse("index.html", {"request": request})



from fastapi.responses import JSONResponse

@contact.post("/", response_class=JSONResponse)
async def create_contact(request: Request):
    try:
        form = await request.form()
        form_data = dict(form)  

      
        print("Form Data Received:", form_data)

        result = conn["myDatabase"]["contacts"].find({})
        print(list(result))  

        insertnode = conn["myDatabase"]["contacts"].insert_one(form_data)

        return JSONResponse(content={"Success": True, "id": str(insertnode.inserted_id)})

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)



