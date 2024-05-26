import axios from "axios"


const url = 'https://pmr2mqz3-3070.use2.devtunnels.ms'

const configAxios = {
    headers: {
        'Content-Type': 'application/json'
    }
}


export const getAxios = async (endPoint: string) => {
    const response = await axios.get(`${url}/${endPoint}`, configAxios)
    return response.data;
}

export const postAxios = async (endPoint: string, data: any) => {
    const response = await axios.post(`${url}/${endPoint}`, data,  configAxios)
    return response.data;
}