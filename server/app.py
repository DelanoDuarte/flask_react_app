from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
from flask_jwt import JWT

from util.constants import secret
from security.security_config import autenticate, identity

from resources.ProcessoResource import ProcessoResource
from resources.UserResource import UserResource, CurrentUserResource


class Home(Resource):

    def get(self):
        return {'result': 'Api Running'}


# app configs
flask_app = Flask(__name__)
flask_app.config['SECRET_KEY'] = secret
flask_app.config['JWT_AUTH_URL_RULE'] = '/api/auth'

api = Api(app=flask_app, prefix='/api')
CORS(flask_app)

jwt = JWT(flask_app, autenticate, identity)


# resources routes
api.add_resource(Home, '/')

api.add_resource(ProcessoResource, '/processo')

# user routes
api.add_resource(UserResource, '/user')
api.add_resource(CurrentUserResource, '/user/in')

flask_app.run(debug=True)
