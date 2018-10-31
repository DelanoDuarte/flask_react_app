from models.user import User
from datetime import timedelta

users = [
    {
        "user":
        {
            "id": 1,
            "name": "Jamal",
            "surname": "Jones",
            "username": "jamal.jones",
            "password": "jam123",
            "roles": ["ADMIN"]
        }
    },
    {
        "user":
        {
            "id": 2,
            "name": "Tim",
            "surname": "Horton",
            "username": "tim.horton",
            "password": "tim123",
            "roles": ["USER"]
        }
    },
    {
        "user":
        {
            "id": 3,
            "name": "James",
            "surname": "Sullivan",
            "username": "jamal.sullivan",
            "password": "james123",
            "roles": ["USER"]
        }
    }
]

users_table = [
    # User(1, 'Jamal', 'Jones', 'jamal.jones', 'jam123', ['ADMIN'])
]

secret = "app_secret"

expiration_time = timedelta(days=1)
