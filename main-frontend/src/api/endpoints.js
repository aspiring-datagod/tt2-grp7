const BASE_URL = "https://reqres.in/api"


export const ENDPOINT = {
    LIST_USERS: (pageNo) => `${BASE_URL}/users?page=${pageNo}`,
    SINGLE_USER: (id) => `${BASE_URL}/users/${id}`,
    CREATE: `${BASE_URL}/users`,
    UPDATE: `${BASE_URL}/users/2`,
    REGISTER: `${BASE_URL}/register`,
    LOGIN: `${BASE_URL}/login`,
}   


