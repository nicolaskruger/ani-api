import styled from "styled-components";
import { useAppSelector } from "../../../../../app/hooks"
import { singleAnimeSelect } from "../../../../../reducer"
import { DescriptionDiv, DescriptionScore, DescriptionSpan } from "./description.style";

const DescriptionSection = () => {

    const singleAnime = useAppSelector(singleAnimeSelect);

    const { cover_image, score, descriptions } = singleAnime.data;

    const DescriptionImg = styled.div`
        background-image: url(${cover_image});
        background-size: cover;
        background-position: center;
        width: 250px;
        height: 350px;
    `;

    return (
        <DescriptionDiv>
            <DescriptionImg>
                <DescriptionScore>
                    {score}
                </DescriptionScore>
            </DescriptionImg>
            <DescriptionSpan>
                {descriptions.en}
            </DescriptionSpan>
        </DescriptionDiv>
    )
}

export { DescriptionSection }