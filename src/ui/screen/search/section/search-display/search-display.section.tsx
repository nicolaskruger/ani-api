import { useAppSelector } from "../../../../../app/hooks"
import { animeSelect, loading } from "../../../../../reducer"
import { LoadingConnectComponent } from "../../../../components";
import { SearchDisplayDiv } from "./search-display.style";
import { SearchDisplayCardSection } from "./section";

const SearchDisplaySection = () => {

    const anime = useAppSelector(animeSelect);

    const load = useAppSelector(loading);

    if (load || anime === undefined)
        return (
            <LoadingConnectComponent />
        )
    return (
        <SearchDisplayDiv>
            {anime.data.documents.map(anim => (
                <SearchDisplayCardSection anime={anim} />
            ))}
        </SearchDisplayDiv>
    )
}

export { SearchDisplaySection }