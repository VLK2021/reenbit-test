import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services/character.service";


export const getSingleCharacter = createAsyncThunk(
    'singleCharacter/getSingleCharacter',
    async ({id}, {rejectWithValue}) => {
        try {
            const sChar = await characterService.getById(id);
            return sChar;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    singleCharacter: {},
    status: null,
    error: null,
}


const singleCharacter = createSlice({
    name: 'singleCharacter',
    initialState,
    reducers: {},

    extraReducers: {
        [getSingleCharacter.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null;
        },
        [getSingleCharacter.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.singleCharacter = action.payload
        },
        [getSingleCharacter.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

const singleCharacterReducer = singleCharacter.reducer;
export default singleCharacterReducer;

