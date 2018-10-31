from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
from flask_jwt import JWT

from util.constants import secret, expiration_time
from security.security_config import autenticate, identity
from config.database import init_db

from resources.ProcessoResource import ProcessoResource
from resources.UserResource import UserResource, CurrentUserResource, SignInResource
from resources.person_resource import PersonResource, PersonFindResource


class Home(Resource):

    def get(self):
        return {'result': 'Api Running'}


# app configs
flask_app = Flask(__name__)
flask_app.config['SECRET_KEY'] = secret
flask_app.config['JWT_AUTH_URL_RULE'] = '/api/auth'
flask_app.config['JWT_EXPIRATION_DELTA'] = expiration_time

api = Api(app=flask_app, prefix='/api')
CORS(flask_app)

jwt = JWT(flask_app, autenticate, identity)


def error_handler(e):
    print(e)
    return {'result': 'Auth Error'}, 401


# resources routes
api.add_resource(Home, '/')

api.add_resource(ProcessoResource, '/processo')

# user routes
api.add_resource(UserResource, '/user')
api.add_resource(CurrentUserResource, '/user/in')
api.add_resource(SignInResource, '/user/sing_in')

# person routes
api.add_resource(PersonResource, '/person')
api.add_resource(PersonFindResource, '/person/<int:id>')

init_db()
flask_app.run(debug=True)
