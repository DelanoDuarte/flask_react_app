import { devUrl } from "./../common/common";

const headers = new Headers()
headers.append("Content-Type", "application/json")

export class LoginAPI {

    auth(user) {
        let credentials = { 'username': user.username, 'password': user.password }
        return fetch(`${devUrl}/auth`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: headers
        }).then(res => res.json())
    }

}