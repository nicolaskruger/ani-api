import styled from "styled-components";
import { COLOR } from "../../../constants";

const { Background, Comment } = COLOR;

const PaginatorDiv = styled.div`
    padding-top: 5px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const PaginatorButton = styled.button`
    background-color: ${Background};
    border: none;
    cursor: pointer;
`;

const PaginatorSpan = styled.span`
    color: ${Comment};
`;


export { PaginatorDiv, PaginatorButton, PaginatorSpan }