import bcrypt
from util.constants import users, users_table
from models.user import User
from models.person import Person


def autenticate(username, password):
    user = User.query.filter(User.username == username).first()
    if user and bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        return user


def identity(payload):
    print('payload identity', payload)
    user_id = payload['identity']
    return user_id
