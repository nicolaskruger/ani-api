import { useQuery } from "../base/query.base.hook";

const QUERY_EPISODE = {
    ID: "id",
    PAGE: "page"
}

type QueryEpisode = {
    id: number,
    page: number
}

const { ID, PAGE } = QUERY_EPISODE;

const useQueryEpisode = (): QueryEpisode => {
    const query = useQuery();

    const id = parseInt(query.get(ID) as string) || 1;

    const page = parseInt(query.get(PAGE) as string) || 1;

    return {
        id,
        page
    }
}

export {
    useQueryEpisode
}

export type {
    QueryEpisode
}