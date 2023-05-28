import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from './pokemonSlice'
import uiReducer from './uiSlice'

export const store = configureStore({
    reducer:{
        pokemons: pokemonReducer,
        ui: uiReducer,
    }
})