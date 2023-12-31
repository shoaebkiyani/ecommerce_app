import axios from 'axios'

const API_URL = '/api/v1/register'

// Register User
const register = async (userData: object) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {register}

export default authService;