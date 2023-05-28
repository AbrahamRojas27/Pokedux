function PokemonContent({pokemonData}){
    const pokemonAbilities = pokemonData.abilities.map(ability => ability)
    const pokemonMoves = pokemonData.moves.map(move => move)
    console.log(pokemonMoves)
    return(
        <>
            <section className="pokemon-images">
                <div className="pokemon-images-container">
                    <p className="pokemon-subtitle">Normal</p>
                    <div className="pokemon-images-content">
                        <figure className="pokemon-image">
                            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                        </figure>
                        <figure className="pokemon-image">
                            <img src={pokemonData.sprites.back_default} alt={pokemonData.name} />
                        </figure>
                    </div>
                </div>

                <div>
                    <figure className="pokemon-image">
                        <img src="https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_1280.png" alt="pokeball" />
                    </figure>
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

            <section className="pokemon-content-container">
                <article className="pokemon-content">
                    <h3 className="pokemon-subtitle">Abilities:</h3>
                    <div className="pokemon-abilities">
                        <p className="pokemon-text">{pokemonAbilities[0].ability.name}</p>
                        <p className="pokemon-text">{pokemonAbilities[1].ability.name}</p>
                    </div>
                </article>
                <article className="pokemon-content">
                    <h3 className="pokemon-subtitle">Moves:</h3>
                    <div className="pokemon-moves">
                        <p className="pokemon-text">{pokemonMoves[0].move.name}</p>
                        <p className="pokemon-text">{pokemonMoves[1].move.name}</p>
                        <p className="pokemon-text">{pokemonMoves[2].move.name}</p>
                        <p className="pokemon-text">{pokemonMoves[3].move.name}</p>
                    </div>
                </article>
                <article className="pokemon-content">
                    <h3 className="pokemon-subtitle">Qualities:</h3>
                    <div className="pokemon-qualities">
                        <p className="pokemon-text">Base experience: {pokemonData.base_experience}</p>
                        <p className="pokemon-text">Height: {pokemonData.height}m</p>
                        <p className="pokemon-text">Weight: {pokemonData.weight}kg</p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default PokemonContent