import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { GENERATE_TOKEN } from "../../../constants";
import { setTokenAction, setTokenAsyncAction } from "../../../reducer/token/token.slicer";
import { Input } from "../../components";
import { LoginButton, LoginDiv, LoginForm, LoginInput, LoginLabel, LoginLink, LoginSpan } from "./login.style";


const LoginScreen = () => {

    const [token, setToken] = useState("");

    const dispatch = useAppDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setTokenAsyncAction(token));
    }

    return (
        <LoginDiv>
            <LoginForm onSubmit={handleSubmit}>

                <LoginSpan>
                    <LoginLabel>
                        Token
                    </LoginLabel>
                    <Input Style={LoginInput} value={token} onChange={setToken} />
                </LoginSpan>
                <LoginButton>
                    send
                </LoginButton>
                <LoginLink href={GENERATE_TOKEN}>
                    generate token
                </LoginLink>
            </LoginForm>
        </LoginDiv>
    )
}

export { LoginScreen }