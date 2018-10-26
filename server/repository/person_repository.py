from models.person import Person
from config.database import db_session


class PersonRepository():

    def save(self, name, email):
        p = Person(name, email)
        person = db_session.merge(p)
        db_session.commit()
        return person

    def update(self, id):
        pass

    def find_all(self):
        return Person.query.all()

    def find_one(self, id):
        return Person.query.filter(Person.id == id).first()
