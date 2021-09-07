import styled from "styled-components";
import { COLOR } from "../../../../../constants";

const { Background, Yellow, Comment } = COLOR;

const DescriptionDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const DescriptionScore = styled.div`
    background-color: ${Background};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 50% 0;
    padding-right: 5px;
    padding-bottom: 5px;
    color: ${Yellow};
`;

const DescriptionSpan = styled.span`
    display: flex;
    text-align: justify;
    width: 70%;
    color: ${Comment}
`;


export { DescriptionDiv, DescriptionSpan, DescriptionScore }