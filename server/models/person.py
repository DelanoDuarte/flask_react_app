from sqlalchemy import Column, Integer, String
from config.database import Base


class Person(Base):
    __tablename__ = 'peoples'

    id = Column(Integer, primary_key=True)
    name = Column(String(length=255))
    email = Column(String(length=255))

    def __init__(self, name, email):
        self.name = name
        self.email = email
