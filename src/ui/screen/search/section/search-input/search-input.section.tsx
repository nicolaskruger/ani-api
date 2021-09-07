import { InputHTMLAttributes } from "react";
import { useHistory } from "react-router";
import { SearchIcon } from "../../../../../assets";
import { INITHIAL_PAGE, ROUTE_FRONT } from "../../../../../constants";
import { Input, InputProps } from "../../../../components"
import { SearchInputForm, SearchInputInput, SearchIputButton } from "./serach-input.style"


interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (val: any) => void
};

const SearchInputSection = (props: SearchInputProps) => {

    const { SEARCH_QUERY } = ROUTE_FRONT;

    const aliasProps = props as InputProps;

    const { value } = props;

    const history = useHistory();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        history.push(SEARCH_QUERY(value as string, INITHIAL_PAGE))
    }

    return (
        <SearchInputForm onSubmit={handleSubmit}>
            <Input {...aliasProps} Style={SearchInputInput} />
            <SearchIputButton>
                <SearchIcon />
            </SearchIputButton>
        </SearchInputForm>
    )
}

export {
    SearchInputSection
}