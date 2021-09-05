import styled, { keyframes } from "styled-components";
import { COLOR } from "../../../../constants";

const { Cyan, Background } = COLOR;

const LoadingDiv = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const LoadingLoader = styled.div`
    border: 10px solid ${Cyan}; /* Light grey */
    border-top: 10px solid ${Background}; /* Blue */
    border-radius: 50%;
    width: 1px;
    height: 1px;
    animation: ${spin} 2s linear infinite;
`;

export { LoadingDiv, LoadingLoader }