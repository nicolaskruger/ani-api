import styled from "styled-components";
import { COLOR } from "../../../../../constants";

const { Current_Line, Pink, Background } = COLOR;

const EpisodeDiv = styled.div`
    padding-top: 20px;
`;

type EpisodeInerButtonProps = {
    first: boolean
}

const EpisodeInerButton = styled.button<EpisodeInerButtonProps>`
    padding: 0;
    margin: 0;
    border: 1px solid ${Current_Line};
    border-top: ${(props) => props.first ? `1px solid ${Current_Line}` : 'none'};
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${Background};
    border-radius: 2px;
`;

const EpisodeSpan = styled.span`
    color: ${Pink};
`;

const EpisodeA = styled.a`

`;

export {
    EpisodeDiv,
    EpisodeInerButton,
    EpisodeSpan,
    EpisodeA
}