import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { GENERATE_TOKEN } from "../../../constants";
import { setTokenAsyncAction } from "../../../reducer/token/token.slicer";
import { Input, LoadingConnectComponent, PopUPComponentConnect } from "../../components";
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
                <LoginLink target="_blank" href={GENERATE_TOKEN}>
                    generate token
                </LoginLink>
                <LoadingConnectComponent />
            </LoginForm>
            <PopUPComponentConnect />
        </LoginDiv>
    )
}

export { LoginScreen }