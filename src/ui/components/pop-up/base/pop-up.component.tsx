import styled, { keyframes } from "styled-components"
import { COLOR } from "../../../../constants";
import { PopUpState } from "../../../../reducer";


const PopUpComponent = (props: PopUpState) => {

    const { success, show, message } = props;

    const { Red, Green, Current_Line } = COLOR;

    const Fade = keyframes`
        0% {
            opacity: 0;
        }
        30% {
            opacity: 1
        }
        70%{
            opacity: 1
        }
        100% {
            opacity: 0;
        }
    `;


    const PopUpDiv = styled.div`
        position: fixed;
        top: 30px;
        left: 30px;
        border: 1px solid ${Current_Line};
        max-width: 300px;
        border-radius: 2px;
        padding: 20px 50px;
        color: ${success ? Green : Red};
        animation: ${Fade} 2s forwards;
    `;
    if (show)
        return (
            <PopUpDiv>
                {message}
            </PopUpDiv>
        )
    return (
        <></>
    )
}

export { PopUpComponent }