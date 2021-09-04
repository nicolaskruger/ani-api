import { InputHTMLAttributes } from "react";
import { StyledComponent } from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (val: any) => void,
    Style: StyledComponent<"input", any, {}, never>
};


const Input = (props: InputProps) => {

    const { Style } = props;


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    }

    return (
        <Style {...props} onChange={onChange} />
    );
}

export { Input }