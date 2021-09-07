import styled from "styled-components";
import { COLOR } from "../../../../../constants";

const { Orange, Purple, Current_Line } = COLOR;

const AnimeDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const AnimeBanner = styled.img`
    width: 100%;
`;


const AnimeTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
`;

const AnimeTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const AnimeTitleBaseSpan = styled.span`
    font-size: 20px;
`;

const AnimeTitleEnSpan = styled(AnimeTitleBaseSpan)`
    color: ${Orange}
`;

const AnimeTitleJpSpan = styled(AnimeTitleBaseSpan)`
    color: ${Purple}
`;

const AnimeHomeButton = styled.button`
    background-color: ${Current_Line};
    width: 55px;
    height: 55px;
    border: 0;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export { AnimeDiv, AnimeBanner, AnimeTitle, AnimeTitleDiv, AnimeTitleEnSpan, AnimeTitleJpSpan, AnimeHomeButton }