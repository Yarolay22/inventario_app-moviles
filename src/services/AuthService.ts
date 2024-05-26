import { postAxios } from "../helpers/axios-helper";

class AuthService {


    async autenticateLogin(email: string, password: string) {
        try {
            return await postAxios('auth/login', {email, password})
        } catch (err) {
            console.error(err);
        }
    }
}

export default AuthService