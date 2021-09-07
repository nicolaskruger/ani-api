import { useQuery } from "../base/query.base.hook"

const ID = "id";

type QueryId = {
    id: string | null
}

const useQueryId = (): QueryId => {
    const query = useQuery();

    const id = query.get(ID) || "1";

    return {
        id
    }
}

export { useQueryId }

export type { QueryId }