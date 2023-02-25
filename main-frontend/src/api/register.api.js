import axios from "axios"
import { ENDPOINT } from "./endpoints";


class RegisterAPI {

    constructor() { }

    /**
     * Create a new user in the platform
     * @param {username : string, email : string, password : whatever} request 
     */
    static async register(request) {
        const response = await axios.post(ENDPOINT.REGISTER, request);
        return response.data
    }
}





export default RegisterAPI