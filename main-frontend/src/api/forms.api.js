import axios from "axios"
import { ENDPOINT } from "./endpoints";


class FormAPI {

    constructor() { }

    /**
     * Create a new user in the platform
     * @param {username : string, password : string} request 
     */
    static async addclaims(request) {
        try {

            const response = await axios.post(ENDPOINT.CREATE, request);
            return response.data
            
        } catch (error) {
            console.log("login in failed")          
        }
        
    }
}





export default FormAPI