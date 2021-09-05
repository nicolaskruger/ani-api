import { useAppSelector } from "../../../../../app/hooks"
import { meSelect } from "../../../../../reducer"
import { SearchHeaderDiv, SearchHeaderEmailSpan, SearchHeaderLocationSpan, SearchHeaderSubDiv, SearchHeaderUserSpan } from "./serach-header.style"

const SearchHeader = () => {

    const me = useAppSelector(meSelect)

    const { email, username, localization } = me.data;

    return (
        <SearchHeaderDiv>
            <SearchHeaderSubDiv>
                <SearchHeaderEmailSpan>
                    {email}
                </SearchHeaderEmailSpan>
                <SearchHeaderUserSpan>
                    {username}
                </SearchHeaderUserSpan>
            </SearchHeaderSubDiv>
            <SearchHeaderLocationSpan>
                {localization}
            </SearchHeaderLocationSpan>
        </SearchHeaderDiv>
    )
}

export { SearchHeader }