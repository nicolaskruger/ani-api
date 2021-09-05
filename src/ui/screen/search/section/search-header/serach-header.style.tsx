import styled from "styled-components";
import { COLOR } from "../../../../../constants";

const { Current_Line, Purple, Pink, Yellow } = COLOR;

const SearchHeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 30px;
    border-bottom: solid 1px ${Current_Line};
`;

const SearchHeaderSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const SearchHeaderBaseSpan = styled.span`
    font-size: 15px;
`;

const SearchHeaderEmailSpan = styled(SearchHeaderBaseSpan)`
    color: ${Purple}
`;
const SearchHeaderUserSpan = styled(SearchHeaderBaseSpan)`
    color: ${Pink}
`;

const SearchHeaderLocationSpan = styled(SearchHeaderBaseSpan)`
    color: ${Yellow}
`;


export { SearchHeaderDiv, SearchHeaderSubDiv, SearchHeaderEmailSpan, SearchHeaderUserSpan, SearchHeaderLocationSpan }