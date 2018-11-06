export class LoginUtil {

    isUserLoggedIn() {
        let token = window.localStorage.getItem('token')
        if (token)
            return true;
    }

    hasRole(role) {
        let user = window.localStorage.getItem('user')
        return user.roles.indexOf(role) > -1
    }

    clearUserToken() {
        window.localStorage.removeItem('token')
    }

}