import axios from "axios"
import { ENDPOINT } from "./endpoints";


class EmailAPI {

    constructor() { }

    /**
     * Create a new user in the platform
     * @param {username : string, email : string, password : whatever} request 
     */
    static async emailchange(request) {
        const response = await axios.patch(ENDPOINT.UPDATE, request);
        return response.data
    }
}





export default EmailAPI