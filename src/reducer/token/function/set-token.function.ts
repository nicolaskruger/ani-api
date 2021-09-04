import { PayloadAction } from "@reduxjs/toolkit";
import { TokenState } from "../token.slicer";

const setToken = (state: TokenState, action: PayloadAction<string>): TokenState => (
    {
        ...state,
        token: action.payload
    }
)

export { setToken }