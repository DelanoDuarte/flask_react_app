from flask import Flask
from flask_restful import Api, Resource

from resources.ProcessoResource import ProcessoResource


class Home(Resource):

    def get(self):
        return {'result': 'Api Running'}


flask_app = Flask(__name__)
api = Api(app=flask_app, prefix='/api')

api.add_resource(Home, '/')
api.add_resource(ProcessoResource, '/processo')

flask_app.run(debug=True)
