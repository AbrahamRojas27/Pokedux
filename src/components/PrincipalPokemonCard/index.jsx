function PrincipalPokemonCard(props){

    const typesStr = props.types.map(type => type.type.name).join(' ,')
    const type = props.types.map(type => type.type.name)
    return(
        <div className="slider-home-card">
            <figure className="slider-home-img-container">
                <img className="slider-home-img" src={props.img} alt={props.name} />
            </figure>
            <article className="slider-home-text-container">
                <p className="slider-home-name-pokemon">{props.name}</p>
                <p className={`slider-home-type-pokemon type-background-${type[0]}`}>{typesStr}</p>
            </article>
        </div>
    )
}

export default PrincipalPokemonCard