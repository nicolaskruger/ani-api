import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { SINGLE_ANIME } from "../../../../constants";
import { SingleAnime } from "../../../../dto";
import { myAniApi } from "../../axios";

export const animeAsyncAction = createAsyncThunk<SingleAnime | undefined, number, { state: RootState, extra: null }>(
    "info/anime",
    async (id, thunkAPI) => {

        const token = thunkAPI.getState().token.token as string;

        const api = myAniApi(token);

        const response = await api.animeId(id);

        if (response.status_code === 404) {
            return SINGLE_ANIME;
        }

        return response;
    }
);