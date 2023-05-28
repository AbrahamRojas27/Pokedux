import HeroImg from "../../components/HeroImg"

const Hero = () =>{
    return(
        <section className="hero">
            <div className='title-container'>
                <h1 className='hero-title'>Enjoy looking for your favorite pokemons.</h1>
            </div>
            <div className="figure-container">
                <HeroImg/>
            </div>
        </section>
    )
}

export default Hero