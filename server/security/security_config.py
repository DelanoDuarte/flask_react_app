from util.constants import users, users_table
from models.user import User
from models.person import Person


def autenticate(username, password):
    user = {"username": username, "password": password}
    print(user)
    print('autentication method ...')

    for u in users_table:
        if u.login == user['username']:
            return u


def identity(payload):
    print('payload identity', payload)
    user_id = payload['identity']
    return user_id
