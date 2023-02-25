import axios from "axios"
import { ENDPOINT } from "./endpoints";


class PasswordAPI {

    constructor() { }

    /**
     * Change Password after login
     * @param {oldpassword : string, newpassword : string} request 
     */
    static async passwordchange(request) {
        const response = await axios.patch(ENDPOINT.UPDATE, request);
        return response.data
    }
}





export default PasswordAPI