function PokemonHeader({pokemonData}){
    const type = pokemonData.types.map(type => type.type.name)
    const stats = pokemonData.stats.map(stat => stat)
    const secontTypeClass = type[1] ? `type-background-${type[1]} pokemon-type-container` : 'hidden'
    const secontType = type[1] ? type[1] : ''

    return(
            <div className="pokemon-header">
            <section>
                <h3 className="pokemon-subtitle">Types:</h3>
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
            </section>

            <section>
                <h1 className="single-pokemon-name">{pokemonData.name}</h1>
                <figure className={`pokemon-img`}>
                <img src={pokemonData.sprites.other.home.front_default} alt={pokemonData.name} />
                </figure>
            </section>

            <section>
                <article>   
                    <h3 className="pokemon-subtitle">Stats:</h3>         
                    <div className='pokemon-stats'>
                        <div className={`pokemon-stats-container type-background-${type[0]}`}>
                            <div className='pokemon-stat-container'>
                                <p className='stat-name'>{stats[0].stat.name}: {stats[0].base_stat}</p>
                            </div>

                            <div className='pokemon-stat-container'>
                                <p className='stat-name'>{stats[1].stat.name}: {stats[1].base_stat}</p>
                            </div>

                            <div className='pokemon-stat-container'>
                                <p className='stat-name'>{stats[2].stat.name}: {stats[2].base_stat}</p>
                            </div>

                            <div className='pokemon-stat-container'>
                                <p className='stat-name'>{stats[3].stat.name}: {stats[3].base_stat}</p>
                            </div>

                            <div className='pokemon-stat-container'>
                                <p className='stat-name'>{stats[4].stat.name}: {stats[4].base_stat}</p>
                            </div>

                            <div className='pokemon-stat-container'>
                                <p className='stat-name'>{stats[5].stat.name}: {stats[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            </div>

    )
}

export default PokemonHeader