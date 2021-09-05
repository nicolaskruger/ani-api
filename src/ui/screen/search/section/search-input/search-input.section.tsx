import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../../../../../assets";
import { Input, InputProps } from "../../../../components"
import { SearchInputForm, SearchInputInput, SearchIputButton } from "./serach-input.style"


interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (val: any) => void
};

const SearchInputSection = (props: SearchInputProps) => {

    const aliasProps = props as InputProps;

    return (
        <SearchInputForm>
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