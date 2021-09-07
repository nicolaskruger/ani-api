import styled from "styled-components";
import { COLOR } from "../../../../../constants";

const { Background, Comment } = COLOR;

const SearchPaginatorDiv = styled.div`
    padding-top: 5px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const SearchPaginatorButton = styled.button`
    background-color: ${Background};
    border: none;
    cursor: pointer;
`;

const SearchPaginatorSpan = styled.span`
    color: ${Comment};
`;


export { SearchPaginatorDiv, SearchPaginatorButton, SearchPaginatorSpan }