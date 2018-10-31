from models.user import User
from config.database import db_session
import bcrypt


class UserRepository():

    def save(self, user=User):
        crypt_password = bcrypt.hashpw(
            user.password.encode('utf-8'), bcrypt.gensalt())
        print(crypt_password)
        user.password = crypt_password
        user = db_session.merge(user)
        db_session.commit()
        return user

    def remove(self, id):
        pass

    def find_one(self, id):
        user = User.query.filter(User.id == id).first()
        return user

    def find_all(self):
        users = User.query.all()
        return users
