import axios from "axios"
class WebService
{
    getApiCall(URL)
    {
        return axios.get(URL)
    }
    postApiCall(URL,data)
    {
        return axios.post(URL,data)
    }
}

export default new WebService()