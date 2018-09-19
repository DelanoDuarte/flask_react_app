import { devUrl } from './../common/common'

const url = `${devUrl}/user`;

const headers = new Headers()
headers.append("Content-Type", "application/json")

export class UserAPI {

    getAllUsers() {
        return fetch(url, { method: 'GET' })
            .then(res => res.json())
    }

    newUser(user) {
        return fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: headers
            })
            .then(res => res.json())
    }

}