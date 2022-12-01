import axios from "axios"


export const baseUrl = "https://api.nilecruisez.com/api"
export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
          
        }
    })
    return data
}