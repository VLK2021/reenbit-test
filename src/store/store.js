import {configureStore} from "@reduxjs/toolkit";

import characterReducer from "./slices/character.slice";
import singleCharacterReducer from "./slices/singleCharacter.slice";


const store = configureStore({
    reducer: {
        characters: characterReducer,
        singleCharacterR: singleCharacterReducer
    }
});

export default store;