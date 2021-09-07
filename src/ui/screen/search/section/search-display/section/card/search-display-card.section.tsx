import { useHistory } from "react-router";
import styled from "styled-components";
import { ROUTE_FRONT } from "../../../../../../../constants";
import { DocumentAnime } from "../../../../../../../dto"
import { SearchDisplayCardDiv } from "./search-display-card.style";

type SearchDisplayCardProps = {
    anime: DocumentAnime
}

const SearchDisplayCardSection = (props: SearchDisplayCardProps) => {

    const { ANIME_QUERY } = ROUTE_FRONT;

    const history = useHistory();

    const { anime } = props;

    const { titles: { jp, en } } = anime;

    const SearchDisplayCardButton = styled.button`
        position: relative;
        border: 0;
        padding: 0;
        margin: 0;
        width: 200px;
        height: 300px;
        cursor: pointer;
        display: flex;
        background-size: cover;
        background-position: center;
        background-image: url(${anime.cover_image});
        flex-direction: column;
        justify-content: flex-end;
    `;

    const titleToLong = (title: string) => (
        title.substr(0, 30) + (title.length > 30 ? "..." : "")
    )

    const handleClick = () => {
        history.push(ANIME_QUERY(anime.id))
    }

    return (
        <SearchDisplayCardButton onClick={handleClick} key={anime.id}>

            <SearchDisplayCardDiv>
                <span>
                    {titleToLong(en)}
                </span>
                <span>
                    {titleToLong(jp)}
                </span>
            </SearchDisplayCardDiv>
        </SearchDisplayCardButton>
    )
}

export { SearchDisplayCardSection }