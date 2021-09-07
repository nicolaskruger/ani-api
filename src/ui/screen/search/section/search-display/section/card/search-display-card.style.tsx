import styled from "styled-components";
import { COLOR } from "../../../../../../../constants";


const { Cyan } = COLOR;

export const SearchDisplayCardDiv = styled.div`
    height: 40%;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: #000000ae;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: ${Cyan};
`;