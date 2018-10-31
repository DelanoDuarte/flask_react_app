from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship, backref
from config.database import Base
from models.roles import Roles


class User(Base):

    __tablename__ = 'tb_user'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    surname = Column(String(255))
    email = Column(String(255))
    username = Column(String(255))
    password = Column(String(255))
    roles = relationship('Roles', backref='roles',
                         lazy=True)

    def __init__(self, name, surname, email, username, password):
        self.name = name
        self.surname = surname
        self.email = email
        self.username = username
        self.password = password
