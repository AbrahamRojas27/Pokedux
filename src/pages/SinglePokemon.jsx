import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import PokemonHeader from '../containers/PokemonHeader'
import PokemonContent from '../containers/PokemonContent'

function SinglePokemon (){
    const { pokemonData } = useLoaderData()
    console.log()
    return(
        <div className='single-pokemon'>
            <PokemonHeader 
            pokemonData = {pokemonData}
            />
            <PokemonContent
                pokemonData = {pokemonData}
            />
        </div>
    )
}

export default SinglePokemon

export async function loader ({params}){
    const pokemonData = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        .then((res) => res.data)
        .catch((err) => console.log(err))

    return { pokemonData }
}