import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../../app/hooks";
import { ROUTE_FRONT } from "../../../../../constants";
import { useQueryEpisode } from "../../../../../hooks";
import { episodeAsyncAction, episodeSelect } from "../../../../../reducer";
import { EpisodeDiv, EpisodeInerButton, EpisodeSpan } from "./episode.style";
import { EpisodePaginator, LoadingEp } from "./section";

const EpisodesSection: FC = () => {

    const dispatch = useDispatch();

    const { ANIME_QUERY } = ROUTE_FRONT;

    const query = useQueryEpisode();

    useEffect(() => {
        dispatch(episodeAsyncAction(query))
    }, [query.page])

    const episode = useAppSelector(episodeSelect);

    return (
        <EpisodeDiv>
            {episode && episode.data.documents.map((ep, index) => {
                return (
                    <Link to={ANIME_QUERY(query.id, query.page, index)}>
                        <EpisodeInerButton first={index === 0} key={ep.id}>
                            <EpisodeSpan>{ep.number}</EpisodeSpan>
                            <EpisodeSpan>{ep.locale}</EpisodeSpan>
                            <EpisodeSpan>{ep.source}</EpisodeSpan>
                        </EpisodeInerButton>
                    </Link>
                )
            })}
            <EpisodePaginator />
            <LoadingEp />
        </EpisodeDiv>
    )
}

export { EpisodesSection }