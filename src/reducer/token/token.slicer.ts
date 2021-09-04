import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../constants";
import { getLocalStorage } from "../../utils";
import { setToken } from "./function";

export interface TokenState {
    token?: string;
}

const initialState: TokenState = getLocalStorage(LOCAL_STORAGE.TOKEN) || {

}

export const tokenSlicer = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: setToken
    }
})

export const { setToken: setTokenAction } = tokenSlicer.actions;

export const token = (state: TokenState) => state.token as String;

export const tokenReducer = tokenSlicer.reducer;