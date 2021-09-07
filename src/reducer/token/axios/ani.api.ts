import { AxiosResponse } from "axios";
import { BASE_URL, ROUTES_BACK } from "../../../constants"
import { Anime, Me } from "../../../dto";
import { QuerySearch } from "../../../hooks";
import { myAxios } from "./axios.api"

const myAniApi = (Authorization: String = "") => {

    const { ME, ANIME } = ROUTES_BACK;

    const instance = myAxios(BASE_URL, {
        Authorization: `Bearer ${Authorization}`
    })

    const me = async () => {
        const response: AxiosResponse<Me> = await instance.get(ME);

        return response.data;
    }

    const anime = async (query: QuerySearch) => {

        const title = query.name;

        const response: AxiosResponse<Anime> = await instance.get(ANIME, {
            params: {
                title,
                page: query.page
            }
        })

        return response.data;
    }

    return {
        me,
        anime
    }

}

export { myAniApi }