from config.db import conn


def contactEntity(item) -> dict:
    return {
        "name": item["name"],
        "email": item["email"],
        "message": item["message"]
    }


def contactsEntity(entity) -> list:
    return [contactEntity(item) for item in entity]