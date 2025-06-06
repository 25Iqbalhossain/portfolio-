from pydantic import BaseModel
from config.db import conn

class Conn(BaseModel):
    name: str
    email: str
    message: str

    