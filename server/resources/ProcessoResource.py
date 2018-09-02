from flask_restful import Resource
from flask import request


class ProcessoResource(Resource):

    processos = [
        {"id": 1, "nome": "Processo Teste1"},
        {"id": 2, "nome": "Processo Teste2"},
        {"id": 3, "nome": "Processo Teste3"}
    ]

    def get(self):
        return {"processos": self.processos}, 200

    def post(self):
        body = request.get_json()
        processo = body['processo']
        print(processo)
        pass
