import { useHistory } from "react-router";
import { useAppSelector } from "../../../../../app/hooks";
import { NextIcon } from "../../../../../assets/img/next/next.icon";
import { PrevIcon } from "../../../../../assets/img/prev/prev.icon";
import { INITHIAL_PAGE, ROUTE_FRONT } from "../../../../../constants";
import { useQuerySearch } from "../../../../../hooks"
import { animeSelect } from "../../../../../reducer";
import { SearchPaginatorButton, SearchPaginatorDiv, SearchPaginatorSpan } from "./search-paginator.style";

const SearchPaginatorSection = () => {

    const { SEARCH_QUERY } = ROUTE_FRONT;

    const { name, page } = useQuerySearch();

    const history = useHistory();

    const lastPage = useAppSelector(animeSelect)?.data?.last_page || INITHIAL_PAGE;

    const pageNum = parseInt(page);

    const handlePrev = () => {

        const prev = pageNum === 1 ? 1 : pageNum - 1;

        history.push(
            SEARCH_QUERY(name, prev)
        );
    }

    const handleNext = () => {
        const next = lastPage === pageNum ? pageNum : pageNum + 1;

        history.push(
            SEARCH_QUERY(name, next)
        )
    }

    return (
        <SearchPaginatorDiv>
            <SearchPaginatorButton onClick={handlePrev}>
                <PrevIcon />
            </SearchPaginatorButton>
            <SearchPaginatorSpan>
                {page}
            </SearchPaginatorSpan>
            <SearchPaginatorButton onClick={handleNext}>
                <NextIcon />
            </SearchPaginatorButton>
        </SearchPaginatorDiv>
    )
}

export {
    SearchPaginatorSection
}