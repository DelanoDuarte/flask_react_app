from flask_restful import Resource
from flask import request


class UserResource(Resource):

    users = [
        {"id": 1, "name": "Jamal", "surname": "Jones", "roles": ["ADMIN"]},
        {"id": 2, "name": "Tim", "surname": "Horton", "roles": ["USER"]},
        {"id": 3, "name": "James", "surname": "Sullivan", "roles": ["USER"]}
    ]

    def get(self):
        return {'users': self.users}

    def post(self):
        data = request.get_json()
        print(data['user'])
        pass
