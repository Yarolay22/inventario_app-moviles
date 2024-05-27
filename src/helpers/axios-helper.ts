import axios from "axios"


const url = 'http://localhost:3070'

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

export const putAxios = async (endPoint: string, data: any) => {
    const response = await axios.put(`${url}/${endPoint}`, data,  configAxios)
    return response.data;
}

export const deleteAxios = async (endPoint: string) => {
    const response = await axios.delete(`${url}/${endPoint}`, configAxios)
    return response.data;
}