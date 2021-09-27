import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQueryEpisode } from "../../../../../hooks";
import { episodeAsyncAction } from "../../../../../reducer";
import { LoadingEp } from "./section";

const EpisodesSection: FC = () => {

    const dispatch = useDispatch();

    const query = useQueryEpisode();

    useEffect(() => {
        dispatch(episodeAsyncAction(query))
    }, [])

    return (
        <div>
            <LoadingEp />
        </div>
    )
}

export { EpisodesSection }