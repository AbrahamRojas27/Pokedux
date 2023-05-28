import Hero from "../containers/Hero"
import PrincipalPokemons from "../containers/PrincipalPokemons"
import PokemonBanner from "../containers/PokemonBanner"
import PrincipalBanner from "../containers/PrincipalBanner"

function Home (){
    return(
        <>
            <PrincipalBanner/>
            <Hero/>
            <PokemonBanner />
        </>
    )
}

export default Home