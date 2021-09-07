import { useEffect } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { HomeIcon } from "../../../assets";
import { INITHIAL_PAGE, ROUTE_FRONT } from "../../../constants";
import { useQueryId } from "../../../hooks"
import { animeAsyncAction, loading, singleAnimeSelect } from "../../../reducer";
import { LoadingConnectComponent } from "../../components";
import { AnimeBanner, AnimeDiv } from "./anime.style";
import { AnimeTitleSection, DescriptionSection } from "./section";

const AnimeScreen = () => {


    const { id } = useQueryId();

    const dispatch = useAppDispatch();

    const load = useAppSelector(loading);

    const singleAnime = useAppSelector(singleAnimeSelect);

    const anime = singleAnime.data;

    useEffect(() => {
        dispatch(animeAsyncAction(parseInt(id as string)))
    }, [])

    if (load) {
        return <LoadingConnectComponent />
    }

    return (
        <AnimeDiv>
            <AnimeBanner src={anime.banner_image} alt="banner" />
            <AnimeTitleSection />
            <DescriptionSection />
        </AnimeDiv>
    )
}

export { AnimeScreen }