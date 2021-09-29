import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../../app/hooks";
import { DownloadIcon } from "../../../../../assets";
import { ROUTE_FRONT } from "../../../../../constants";
import { useQueryEpisode } from "../../../../../hooks";
import { episodeAsyncAction, episodeSelect } from "../../../../../reducer";
import { EpisodeA, EpisodeDiv, EpisodeInerButton, EpisodeSpan } from "./episode.style";
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

                    <EpisodeInerButton first={index === 0} key={ep.id}>
                        <EpisodeSpan>{ep.number}</EpisodeSpan>
                        <EpisodeA target="_blank" href={ep.video}>
                            <DownloadIcon />
                        </EpisodeA>
                    </EpisodeInerButton>
                )
            })}
            <EpisodePaginator />
            <LoadingEp />
        </EpisodeDiv>
    )
}

export { EpisodesSection }