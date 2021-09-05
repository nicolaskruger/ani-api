import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LOCAL_STORAGE } from "../../constants";
import { Me } from "../../dto";
import { getLocalStorage } from "../../utils";
import { hideFunction, setToken, setTokenAsync as setTokenA, showFunction } from "./function";

export interface PopUpState {
    message?: string;
    show: boolean;
    success?: boolean
}

export interface TokenState {
    token?: string;
    me?: Me;
    loading: boolean;
    pop_up: PopUpState
}

const initialState: TokenState = getLocalStorage(LOCAL_STORAGE.TOKEN) || {
    pop_up: {
        show: false
    }
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
        setToken: setToken,
        hide: hideFunction,
        show: showFunction
    },
    extraReducers: (builder) => {
        builder
            .addCase(setTokenAsyncAction.pending, (state) => {
                return {
                    ...state,
                    loading: true
                }
            })
            .addCase(setTokenAsyncAction.fulfilled, (state, action) => {
                return {
                    ...state,
                    ...action.payload,
                    loading: false
                }
            })
    }
})

export const { setToken: setTokenAction, hide, show } = tokenSlicer.actions;

export const token = (state: RootState) => state.token.token as String;

export const popUp = (state: RootState) => state.token.pop_up;

export const loading = (state: RootState) => state.token.loading;

export const meSelect = (state: RootState) => state.token.me as Me;

export const tokenReducer = tokenSlicer.reducer;