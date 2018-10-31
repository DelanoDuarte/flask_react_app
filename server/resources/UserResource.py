from flask_restful import Resource
from flask import request
from flask_jwt import jwt_required, current_identity
import uuid

from repository.user_repository import UserRepository
from models.user import User


class UserResource(Resource):

    repository = UserRepository()

    users = [
        {"id": 1, "name": "Jamal", "surname": "Jones", "roles": ["ADMIN"]},
        {"id": 2, "name": "Tim", "surname": "Horton", "roles": ["USER"]},
        {"id": 3, "name": "James", "surname": "Sullivan", "roles": ["USER"]}
    ]

    @jwt_required()
    def get(self):
        return {'users': self.users}

    @jwt_required()
    def post(self):
        data = request.get_json()
        user_data = data['user']
        user = {
            "id": int(uuid.uuid1()),
            "name": user_data['name'],
            "surname": user_data['surname']
        }
        self.users.append(user)
        return {'user': user}


class CurrentUserResource(Resource):

    repository = UserRepository()

    @jwt_required()
    def get(self):
        user = self.repository.find_one(int(current_identity))
        authenticated_user = {
            'id': user.id,
            'name': user.name,
            'surname': user.surname,
            'email': user.email,
            'username': user.username
        }

        if user:
            return {'user': authenticated_user}

        return {'user': 'not found'}


class SignInResource(Resource):

    repository = UserRepository()

    def post(self):
        data = request.get_json()
        u = data['user']
        user = User(u['name'], u['surname'], u['email'],
                    u['username'], u['password'])
        new_user = self.repository.save(user)
        if new_user != None:
            return {'result': 'user created'}, 201

        return {'result': 'error'}, 500
