import styled from "styled-components";
import { COLOR, LABEL_FONT_SIZE } from "../../../constants";


const { Comment, Orange, Current_Line, Purple, Pink, Foreground, Cyan } = COLOR;

const LoginDiv = styled.div`
        color: ${Comment};
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const LoginSpan = styled.span`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const LoginLabel = styled.label`
    color: ${Orange};
    font-size: ${LABEL_FONT_SIZE};
`;

const LoginInput = styled.input`
    background-color: ${Current_Line};
    color: ${Purple};
    font-size: 25px;
    border: 0;
    height: 50px;
`;



const LoginButton = styled.button`
    cursor: pointer;
    height: 50px;
    background-color: ${Pink};
    color: ${Foreground};
    border: none;
    font-weight: bold;
    font-size: 15px;
    border-radius: 2px;
`;

const LoginLink = styled.a`
    cursor: pointer;
    color: ${Cyan};
    text-align: center;
`;

export { LoginDiv, LoginInput, LoginForm, LoginLabel, LoginButton, LoginSpan, LoginLink }