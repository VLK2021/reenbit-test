import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services/character.service";


export const getAllCharacters = createAsyncThunk(
    'characterSlice/getAllCharacters',
    async (_, {rejectWithValue}) => {
        try {
            const charactersArr = await characterService.getAll();
            return charactersArr;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    characters: [],
    status: "",
    error: null,
    info: {}
}


const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,

    reducers: {},

    extraReducers: {
        [getAllCharacters.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllCharacters.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.characters = action.payload
            state.info = action.payload.info
        },
        [getAllCharacters.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const characterReducer = characterSlice.reducer;
export default characterReducer;