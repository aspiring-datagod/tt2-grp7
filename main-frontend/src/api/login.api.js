import axios from "axios"
import { ENDPOINT } from "./endpoints";


class LoginApi {

    constructor() { }

    /**
     * Create a new user in the platform
     * @param {username : string, password : string} request 
     */
    static async login(request) {
        try {

            const response = await axios.post(ENDPOINT.LOGIN, request);
            return response.data
            
        } catch (error) {
            console.log("login in failed")          
        }
        
    }
}





export default LoginApi