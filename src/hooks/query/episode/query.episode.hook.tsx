import { useQuery } from "../base/query.base.hook";

const QUERY_EPISODE = {
    ID: "id",
    PAGE: "page",
    INDEX: "index"
}

type QueryEpisode = {
    id: number,
    page: number,
    index?: number
}

const { ID, PAGE, INDEX } = QUERY_EPISODE;

const useQueryEpisode = (): QueryEpisode => {
    const query = useQuery();

    const id = parseInt(query.get(ID) as string) || 1;

    const page = parseInt(query.get(PAGE) as string) || 1;

    const index = parseInt(query.get(INDEX) as string) || 1;

    return {
        id,
        page,
        index
    }
}

export {
    useQueryEpisode
}

export type {
    QueryEpisode
}