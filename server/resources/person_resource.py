from flask_restful import Resource
from flask import request, json
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

    @jwt_required()
    def get(self):
        persons = self.repository.find_all()
        persons_json = []

        for p in persons:
            person = {
                'id': p.id,
                'name': p.name,
                'email': p.email
            }
            persons_json.append(person)

        return {'persons': persons_json}


class PersonFindResource(Resource):

    repository = PersonRepository()

    def get(self, id):
        person = self.repository.find_one(id)

        if person == None:
            return {'data': 'not found'}

        person_json = {
            'id': person.id,
            'name': person.name,
            'email': person.email
        }
        return {'person': person_json}, 200
