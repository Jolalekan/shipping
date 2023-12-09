import axios from "axios"

// export default axios.create({
//     baseURL: 'http://localhost:4000',

// })

export const apiLogin = async (email, password) => {
    try {
        const response = await axios.post("/api/login", { email, password })
        if (response.status >= 200 && response.status < 300) {

            const userData = response.data
            console.log(userData)
            return userData
        }
        else {
            console.error('Login failed. status code :', response.status)
        }
    }
    catch (error) {
        console.error("error login in", error.message)
        throw error
    }
}


export const tracking = async (trackingNumber) => {
    try {
        const response = await axios.get("/api/tracking", {trackingNumber })
        if (response.status >= 200 && response.status < 300) {

            const userData = response.data
            console.log(userData)
            return userData
        }
        else {
            console.error('Login failed. status code :', response.status)
        }
    }
    catch (error) {
        console.error("error login in", error.message)
        throw error
    }
}