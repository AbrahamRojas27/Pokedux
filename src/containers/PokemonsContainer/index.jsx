import { useEffect, useMemo, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import PokemonCard from "../../components/PokemonCard"
import { fetchPokemonsWidthDetails } from "../../redux/pokemonSlice"
import LoaderSkeleton from "../LoaderSkeleton"
import Search from "../../components/Search"

function PokemonContainer (){
    const pokemonsRes = useSelector(state => state.pokemons.pokemons, shallowEqual)
    const [search, setSearch] = useState('')
    const loading = useSelector(state => state.ui.loading)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchPokemonsWidthDetails())
    }, [])

    const pokemons = useMemo(() => pokemonsRes.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())))
    const articleClass = !loading ? 'pokemon-container' : '';
    const sectionClass = !loading ? 'container' : 'container--loading';
    return(
        <section className={sectionClass}>
            <Search 
                setSearch = {setSearch}
                search = {search}
            />

            <article className={articleClass}>
                {
                loading ? <LoaderSkeleton/> 
                : pokemons.map(pokemon =>(
                        <PokemonCard
                            key={pokemon.id}
                            id={pokemon.id}
                            name ={pokemon.name}
                            img={pokemon.sprites.front_default}
                            stats={pokemon.stats}
                            types={pokemon.types}
                        />
                ))
                }
            </article>
        </section>
    )
}

export default PokemonContainer