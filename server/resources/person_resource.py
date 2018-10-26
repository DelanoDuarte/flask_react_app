from flask_restful import Resource
from flask import request
from flask_jwt import jwt_required

from repository.person_repository import PersonRepository


class PersonResource(Resource):

    repository = PersonRepository()

    @jwt_required()
    def post(self):
        data = request.get_json()
        person = self.repository.save(data['name'], data['email'])
        json_data = {
            'id': person.id,
            'name': person.name,
            'email': person.email
        }
        return {'person': json_data}, 201
