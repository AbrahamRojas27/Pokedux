import SliderHomeImg from "../../components/SliderHomeImg"
import PrincipalPokemonsSlider from "../../components/PrincipalPokemonsSlider"
function PrincipalPokemons(){
    return(
        <section className="principal-pokemons">
            <PrincipalPokemonsSlider/>
            <SliderHomeImg/>
        </section>
    )
}

export default PrincipalPokemons