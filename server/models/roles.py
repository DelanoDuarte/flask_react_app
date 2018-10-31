from config.database import Base
from sqlalchemy import Column, String, Integer, ForeignKey


class Roles(Base):

    __tablename__ = 'tb_roles'

    id = Column(Integer, primary_key=True)
    role = Column(String(255))
    user_id = Column(Integer, ForeignKey('tb_user.id'), nullable=False)

    def __init__(self, id, role):
        self.id = id
        self.role = role
