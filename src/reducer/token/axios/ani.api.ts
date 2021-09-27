import { AxiosResponse } from "axios";
import { BASE_URL, ROUTES_BACK } from "../../../constants"
import { Anime, Episode, Me, SingleAnime } from "../../../dto";
import { QueryEpisode, QuerySearch } from "../../../hooks";
import { myAxios } from "./axios.api"

const myAniApi = (Authorization: String = "") => {

    const { ME, ANIME, EPISODE, ANIME_PARAM } = ROUTES_BACK;

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

    const animeId = async (id: number) => {
        const response: AxiosResponse<SingleAnime> = await instance.get(ANIME_PARAM(id));

        return response.data;
    }

    const episode = async (query: QueryEpisode) => {
        const response: AxiosResponse<Episode> = await instance.get(EPISODE, {
            params: {
                ...query
            }
        })

        return response.data;
    }

    return {
        me,
        anime,
        animeId,
        episode
    }

}



export {
    myAniApi,
}
