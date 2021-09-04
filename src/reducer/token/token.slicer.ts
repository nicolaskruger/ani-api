import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../constants";
import { getLocalStorage } from "../../utils";
import { setToken, setTokenAsync as setTokenA } from "./function";

export interface TokenState {
    token?: string;
    access: boolean;
    extra: number
}

const initialState: TokenState = getLocalStorage(LOCAL_STORAGE.TOKEN) || {
    access: false
}



export const setTokenAsyncAction = createAsyncThunk(
    "token/set-async",
    setTokenA
)
export const meAsyncAction = createAsyncThunk<number, number, { state: TokenState, extra: null }>(
    "info/me",
    (any, thunkAPI) => {

        return 0
    }
);

export const tokenSlicer = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: setToken
    },
    extraReducers: (builder) => {
        builder.
            addCase(setTokenAsyncAction.fulfilled, (state, action) => {
                return {
                    ...state,
                    ...action.payload,
                    access: true
                }
            })
    }
})

export const { setToken: setTokenAction } = tokenSlicer.actions;

export const token = (state: TokenState) => state.token as String;

export const tokenReducer = tokenSlicer.reducer;