import BannerImg from "../../components/BannerImg"
import BannerText from "../../components/BannerText"

function PokemonBanner(){
    return(
        <section className='banner-container'>
            <BannerImg/>
            <BannerText/>
        </section>
    )
}

export default PokemonBanner