import { useAppSelector } from "../../../../../app/hooks"
import { animeSelect, loading } from "../../../../../reducer"
import { LoadingConnectComponent } from "../../../../components";
import { SearchDisplayDiv } from "./search-display.style";

const SearchDisplaySection = () => {

    const anime = useAppSelector(animeSelect);

    const load = useAppSelector(loading);

    if (load)
        return (
            <LoadingConnectComponent />
        )
    return (
        <SearchDisplayDiv>
            {anime.data.documents.map(anim => (
                <div key={anim.anilist_id}>
                    <img src={anim.cover_image} alt="" />
                </div>
            ))}
        </SearchDisplayDiv>
    )
}

export { SearchDisplaySection }