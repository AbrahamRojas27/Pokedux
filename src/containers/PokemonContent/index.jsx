function PokemonContent({pokemonData}){
    const pokemonAbilities = pokemonData.abilities.map(ability => ability)
    const pokemonMoves = pokemonData.moves.map(move => move)
    const stats = pokemonData.stats.map(stat => stat)
    const types = pokemonData.types.map(type => type.type.name)
    return(
        <section className="pokemon-content">
            <article className="pokemon-qualities">
                <p className="pokemon-text">{pokemonData.height}m<span className="quality-name">Height</span></p>
                <p className="pokemon-text">{pokemonData.base_experience} <span className="quality-name">Base experience</span></p>
                <p className="pokemon-text">{pokemonData.weight}kg<span className="quality-name">Weight</span></p>
            </article>
           
            <article className='pokemon-stats'>
                <div className={`pokemon-stats-container type-background-${types[0]}`}>
                    <div className='pokemon-stat-container'>
                        <p className='stat-name'><span>{stats[0].stat.name}</span> {stats[0].base_stat}</p>
                    </div>

                    <div className='pokemon-stat-container'>
                        <p className='stat-name'><span>{stats[1].stat.name}</span> {stats[1].base_stat}</p>
                    </div>

                    <div className='pokemon-stat-container'>
                        <p className='stat-name'><span>{stats[2].stat.name}</span> {stats[2].base_stat}</p>
                    </div>

                    <div className='pokemon-stat-container'>
                        <p className='stat-name'><span>{stats[3].stat.name}</span> {stats[3].base_stat}</p>
                    </div>

                    <div className='pokemon-stat-container'>
                        <p className='stat-name'><span>{stats[4].stat.name}</span> {stats[4].base_stat}</p>
                    </div>

                    <div className='pokemon-stat-container'>
                        <p className='stat-name'><span>{stats[5].stat.name}</span> {stats[5].base_stat}</p>
                    </div>
                </div>
            </article>

            <article className="pokemon-powers">
                <article className="pokemon-powers-container">
                    <h3 className="pokemon-subtitle">Moves:</h3>
                    <div className="pokemon-moves">
                        <p className="pokemon-text">{pokemonMoves[0].move.name}</p>
                        <p className="pokemon-text">{pokemonMoves[1].move.name}</p>
                        <p className="pokemon-text">{pokemonMoves[2].move.name}</p>
                        <p className="pokemon-text">{pokemonMoves[3].move.name}</p>
                    </div>
                </article>

                <article className="pokemon-powers-container">
                        <h3 className="pokemon-subtitle">Abilities:</h3>
                        <div className="pokemon-abilities">
                            <p className="pokemon-text">{pokemonAbilities[0].ability.name}</p>
                            <p className="pokemon-text">{pokemonAbilities[1].ability.name}</p>
                        </div>
                </article>
            </article>

            <section className="pokemon-images">
                <div className="pokemon-images-container">
                    <p className="pokemon-subtitle images-title">Normal</p>
                    <div className="pokemon-images-content">
                        <figure className="pokemon-image">
                            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                        </figure>
                        <figure className="pokemon-image">
                            <img src={pokemonData.sprites.back_default} alt={pokemonData.name} />
                        </figure>
                    </div>
                </div>

                <div className="pokemon-images-container">
                    <p className="pokemon-subtitle">Shiny</p>
                    <div className="pokemon-images-content">
                        <figure className="pokemon-image">
                            <img src={pokemonData.sprites.front_shiny} alt={pokemonData.name} />
                        </figure>
                        <figure className="pokemon-image">
                            <img src={pokemonData.sprites.back_shiny} alt={pokemonData.name} />
                        </figure>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default PokemonContent