import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { Anime } from "../../../../dto";
import { QuerySearch } from "../../../../hooks";
import { myAniApi } from "../../axios";

export const searchAsyncAction = createAsyncThunk<Anime | undefined, QuerySearch, { state: RootState, extra: null }>(
    "info/search",
    async (query, thunkAPI) => {

        const token = thunkAPI.getState().token.token as string;

        const api = myAniApi(token);

        return await api.anime(query);

    }
);
