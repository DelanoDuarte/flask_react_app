import { devUrl } from './../common/common'

const url = `${devUrl}/user`;

export class UserAPI {

    getAllUsers() {
        return fetch(url, { method: 'GET' })
            .then(res => res.json())
    }

    newUser(user) {
        return fetch(url, { method: 'POST', body: JSON.stringify(user) })
            .then(res => res.json())
    }

}