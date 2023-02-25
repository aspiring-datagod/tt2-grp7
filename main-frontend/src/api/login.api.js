import axios from "axios"
import { ENDPOINT } from "./endpoints";


class LoginApi {

    constructor() { }

    /**
     * Create a new user in the platform
     * @param {username : string, password : string} request 
     */
    static async login(request) {
        const response = await axios.post(ENDPOINT.LOGIN, request);
        return response.data
    }
}





export default LoginApi