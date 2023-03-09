import {configureStore} from "@reduxjs/toolkit";

import characterReducer from "./slices/character.slice";


const store = configureStore({
    reducer: {
        characters: characterReducer
    }
});

export default store;