import axios from "axios"

const myAxios = (baseUrl: string, headers: any) => {
    return axios.create({
        baseURL: baseUrl,
        headers: headers
    })
}

export { myAxios }