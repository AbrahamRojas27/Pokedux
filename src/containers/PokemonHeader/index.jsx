function PokemonHeader({pokemonData}){
    const type = pokemonData.types.map(type => type.type.name)
    
    const secontTypeClass = type[1] ? `type-background-${type[1]} pokemon-type-container` : 'hidden'
    const secontType = type[1] ? type[1] : ''

    return(
            <div className="pokemon-header">
            <section className="pokemon-img-container">
                <figure className={`pokemon-img`}>
                <img src={pokemonData.sprites.other.home.front_default} alt={pokemonData.name} />
                </figure>
                <h1 className="single-pokemon-name">{pokemonData.name}</h1>
            </section>
            
            <article>
                <div className="pokemon-types-container">
                    <div className={`type-background-${type[0]} pokemon-type-container`}>
                        <p className='pokemon-type'>{type[0]}</p>
                    </div>
                    <div className={secontTypeClass}>
                        <p className='pokemon-type'>{secontType}</p>
                    </div>
                </div>
            </article>
            </div>

    )
}

export default PokemonHeader