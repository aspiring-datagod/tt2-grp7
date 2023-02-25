


class AuthApi {
    constructor() { }

    /**
     * Create a new user in the platform
     * @param {username : string, email : string, password : whatever} request 
     */
    static async register(request) {
        const response = await axios.post(ENDPOINT.REGISTER, request);
        return response.data
    }


    /**
     * Create a new user in the platform
     * @param {username : string, password : string} request 
     */
    static async login(request) {
        const response = await axios.post(ENDPOINT.LOGIN, request);
        return response.data
    }


}

export default AuthApi