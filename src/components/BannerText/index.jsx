import { useNavigate } from "react-router-dom"

function BannerText(){

    const navigate = useNavigate()

    return(
        <article className="banner-text-container">
            <div className="banner-text-figure-container">
                <figure className="banner-text-img-container">
                    <img className="banner-text-img" src="https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_1280.png" alt="" />
                </figure>
            </div>
            <p className="banner-text">Explore among the pokemons of the best generation</p>
            <button className="pokemon-button" onClick={() =>navigate('/pokedex')}>See more</button>
        </article>
    )
}

export default BannerText