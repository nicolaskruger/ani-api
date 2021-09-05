import styled from "styled-components";
import { COLOR } from "../../../../../constants";

const { Current_Line, Comment, Orange } = COLOR;

const SearchInputForm = styled.form`
    padding-top: 10px;
    display: flex;
    width: 100%;
`;

const SearchInputInput = styled.input`
    width: 100%;
    background-color: ${Current_Line};
    color: ${Orange};
    border: none;
    padding: 2px;
`;

const SearchIputButton = styled.button`
    padding: 2px;
    border: none;
    border-left: 1px solid ${Comment};
    margin: 0;
    background-color: ${Current_Line};
    padding-right: 5px;
    padding-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


export { SearchInputInput, SearchInputForm, SearchIputButton }