import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../app/store";
import { Episode } from "../../../../dto";
import { QueryEpisode } from "../../../../hooks";
import { myAniApi } from "../../axios";

export const episodeAsyncAction = createAsyncThunk<Episode | undefined, QueryEpisode, { state: RootState, extra: null }>(
    "info/episode",
    async (query, thunkAPI) => {

        const token = thunkAPI.getState().token.token as string;

        const api = myAniApi(token);

        return await api.episode(query);

    }
);