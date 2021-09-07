import { InputHTMLAttributes, useState } from "react";
import { useHistory } from "react-router";
import { SearchIcon } from "../../../../../assets";
import { INITHIAL_PAGE, ROUTE_FRONT } from "../../../../../constants";
import { Input, InputProps } from "../../../../components"
import { SearchInputForm, SearchInputInput, SearchIputButton } from "./serach-input.style"


interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (val: any) => void
};

const SearchInputSection = () => {

    const [value, setValue] = useState("");

    const { SEARCH_QUERY } = ROUTE_FRONT;


    const history = useHistory();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        history.push(SEARCH_QUERY(value as string, INITHIAL_PAGE))
    }

    return (
        <SearchInputForm onSubmit={handleSubmit}>
            <Input value={value} onChange={setValue} Style={SearchInputInput} />
            <SearchIputButton>
                <SearchIcon />
            </SearchIputButton>
        </SearchInputForm>
    )
}

export {
    SearchInputSection
}