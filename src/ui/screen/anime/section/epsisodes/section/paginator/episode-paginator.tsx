import { FC } from "react"
import { useHistory } from "react-router";
import { useAppSelector } from "../../../../../../../app/hooks";
import { INITHIAL_PAGE, ROUTE_FRONT } from "../../../../../../../constants";
import { useQueryEpisode } from "../../../../../../../hooks"
import { episodeSelect } from "../../../../../../../reducer";
import { PaginatorComponent } from "../../../../../../components"

const EpisodePaginator: FC = () => {

    const query = useQueryEpisode();

    const { ANIME_QUERY } = ROUTE_FRONT;

    const { id, page } = query;

    const history = useHistory();

    const lastPage = useAppSelector(episodeSelect)?.data?.last_page || INITHIAL_PAGE;

    const handlePrev = () => {

        const prev = page === 1 ? 1 : page - 1;

        history.push(
            ANIME_QUERY(id, prev)
        );
    }

    const handleNext = () => {
        const next = lastPage === page ? page : page + 1;

        history.push(
            ANIME_QUERY(id, next)
        )
    }

    return (
        <PaginatorComponent page={page} handlePrev={handlePrev} handleNext={handleNext} />
    )
}

export { EpisodePaginator }