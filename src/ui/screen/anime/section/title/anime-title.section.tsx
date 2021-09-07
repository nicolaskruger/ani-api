import { useHistory } from "react-router";
import { useAppSelector } from "../../../../../app/hooks";
import { HomeIcon } from "../../../../../assets"
import { INITHIAL_PAGE, ROUTE_FRONT } from "../../../../../constants";
import { singleAnimeSelect } from "../../../../../reducer";
import { AnimeHomeButton, AnimeTitle, AnimeTitleDiv, AnimeTitleEnSpan, AnimeTitleJpSpan } from "./anime-title.style"

const AnimeTitleSection = () => {

    const { SEARCH_QUERY } = ROUTE_FRONT;

    const singleAnime = useAppSelector(singleAnimeSelect);

    const anime = singleAnime.data;

    const { titles: { en, jp } } = anime;

    const history = useHistory();

    const handleClick = () => {
        history.push(SEARCH_QUERY("", INITHIAL_PAGE));
    }

    return (
        <AnimeTitle>
            <AnimeTitleDiv>
                <AnimeTitleEnSpan>
                    {en}
                </AnimeTitleEnSpan>
                <AnimeTitleJpSpan>
                    {jp}
                </AnimeTitleJpSpan>
            </AnimeTitleDiv>
            <AnimeHomeButton onClick={handleClick}>
                <HomeIcon />
            </AnimeHomeButton>
        </AnimeTitle>
    )

}

export { AnimeTitleSection }