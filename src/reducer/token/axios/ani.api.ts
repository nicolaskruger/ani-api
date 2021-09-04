import { AxiosResponse } from "axios";
import { BASE_URL, ROUTES_BACK } from "../../../constants"
import { Me } from "../../../dto";
import { myAxios } from "./axios.api"

const myAniApi = (Authorization: String = "") => {

    const { ME } = ROUTES_BACK;

    const instance = myAxios(BASE_URL, {
        Authorization: `Bearer ${Authorization}`
    })

    const me = async () => {
        const response: AxiosResponse<Me> = await instance.get(ME);

        return response.data;
    }
    return {
        me
    }

}

export { myAniApi }