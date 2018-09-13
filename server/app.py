from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS

from resources.ProcessoResource import ProcessoResource
from resources.UserResource import UserResource


class Home(Resource):

    def get(self):
        return {'result': 'Api Running'}


flask_app = Flask(__name__)
api = Api(app=flask_app, prefix='/api')
CORS(flask_app)

api.add_resource(Home, '/')
api.add_resource(ProcessoResource, '/processo')
api.add_resource(UserResource, '/user')

flask_app.run(debug=True)
