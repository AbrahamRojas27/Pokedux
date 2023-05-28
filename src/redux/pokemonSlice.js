import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState =  {
    pokemons: [],
}

export const fetchPokemonsWidthDetails = createAsyncThunk(
    'pokemons/fetchPokemonsWidthDetails',
    async (_, {dispatch}) =>{
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemon(151)
        const pokemonDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        )
        dispatch(setPokemons(pokemonDetailed))
        dispatch(setLoading(false))
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons= action.payload
        }
            
    }
}) 

export const { setPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer