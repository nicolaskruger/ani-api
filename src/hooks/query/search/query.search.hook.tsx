
import { INITHIAL_PAGE } from "../../../constants";
import { useQuery } from "../base/query.base.hook"

const QUERY_SEARCH = {
    NAME: "name",
    PAGE: "page"
}

type QuerySearch = {
    name: string,
    page: string
}

const useQuerySearch = (): QuerySearch => {

    const { NAME, PAGE } = QUERY_SEARCH;

    const query = useQuery();

    const name = query.get(NAME) || "";
    const page = query.get(PAGE) || INITHIAL_PAGE.toString();
    return {
        name,
        page
    }

}

export type { QuerySearch }

export { useQuerySearch }