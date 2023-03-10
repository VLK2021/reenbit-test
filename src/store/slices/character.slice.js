import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {characterService} from "../../services/character.service";


export const getAllCharacters = createAsyncThunk(
    'characterSlice/getAllCharacters',
    async ({page}, {rejectWithValue}) => {
        try {
            const charactersArr = await characterService.getAll(page);
            return charactersArr;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const getSearchCharacters = createAsyncThunk(
    'characterSlice/getSearchCharacters',
    async ({word, page}, {rejectWithValue}) => {
        try {
            const searchCharactersA = await characterService.getSearch(word, page);
            return searchCharactersA;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState = {
    characters: [],
    status: "",
    error: null,
    info: {},
    word: ''
}


const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,

    reducers: {
        addWord: (state, action) => {
            state.word = action.payload
        }
    },

    extraReducers: {
        [getAllCharacters.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getSearchCharacters.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },


        [getAllCharacters.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.characters = action.payload
            state.info = action.payload.info
        },
        [getSearchCharacters.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.characters = action.payload
            state.info = action.payload.info
        },

        [getAllCharacters.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getSearchCharacters.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

const characterReducer = characterSlice.reducer;
export default characterReducer;
export const {addWord} = characterSlice.actions;