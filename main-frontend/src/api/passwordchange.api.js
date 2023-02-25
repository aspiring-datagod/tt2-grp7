import axios from "axios"
import { ENDPOINT } from "./endpoints";


class PasswordAPI {

    constructor() { }

    /**
     * Change Password after login
     * @param {oldpassword : string, newpassword : string} request 
     */
    static async passwordchange(request) {
        try {
            const response = await axios.patch(ENDPOINT.UPDATE, request);
        return response.data
        } catch (error) {
            console.log("password change failed")
        }
        
    }
}





export default PasswordAPI