import { FC } from "react"
import { useAppSelector } from "../../../../../app/hooks"
import { useQueryEpisode } from "../../../../../hooks"
import { episodeSelect } from "../../../../../reducer"
import ReactPlayer from 'react-player';

const PlayerSection: FC = () => {


    const { index } = useQueryEpisode();

    const episode = useAppSelector(episodeSelect)?.data?.documents[index as number]?.video;

    return (
        <ReactPlayer url={[{ src: episode, type: 'video/mp4' }]} />
    )
}

export {
    PlayerSection
}