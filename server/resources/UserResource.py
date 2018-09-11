from flask_restful import Resource


class UserResource(Resource):

    users = [
        {"id": 1, "name": "Jamal", "surname": "Jones", "roles": ["ADMIN"]},
        {"id": 2, "name": "Tim", "surname": "Horton", "roles": ["USER"]},
        {"id": 3, "name": "James", "surname": "Sullivan", "roles": ["USER"]}
    ]

    def get(self):
        return {'users':self.users}
        
