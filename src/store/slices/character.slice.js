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
    charactersFilter: [],
    status: "",
    error: null,
}


const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,

    reducers: {
        filterCharacters: (state, action) => {
            const name = action.payload?.toLowerCase();
            if (name) {
                state.charactersFilter = state.characters.results?.filter(
                    (character) => {
                        return character.name.toLowerCase().includes(name)
                    }
                );
            } else {
                state.charactersFilter = state.characters.results;
            }
        }
    },

    extraReducers: {
        [getAllCharacters.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },

        [getAllCharacters.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.characters = action.payload
        },

        [getAllCharacters.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

const characterReducer = characterSlice.reducer;
export default characterReducer;
export const {filterCharacters} = characterSlice.actions;