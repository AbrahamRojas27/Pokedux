import { Link } from 'react-router-dom'

function PokemonCard(props){
    const types = props.types.map(elem => elem.type.name).join(', ')
    const typeClass = props.types.map(elem => elem.type.name)
    const stats = props.stats.map(elem => elem)
    const statsElem = stats.map(elem => elem)

    return(
        <Link to={`${props.name}`} className="pokemon-card">
            <figure className='img-container'>
                <img className='img' src={props.img} alt={props.name} />
            </figure>
            <article>
                <h3 className='pokemon-name'>{props.name}</h3>

                <div className='info-container'>
                    <div className='types-container'>
                        <p className='subtitle-card'>types:</p>
                        <p className='types'>{types}</p>
                    </div>

                    <div className={`container-stats-${typeClass[0]}`}>
                        <p className='subtitle-card'>Stats</p>
                        <div className='stats-container'>
                            <div className='stats-container-info'>
                                <p className='pokemon-info'>{statsElem[0].stat.name}</p>
                                <p className='types'>{statsElem[0].base_stat}</p>
                            </div>
                            <div className='stats-container-info'>
                                <p className='pokemon-info'>{statsElem[1].stat.name}</p>
                                <p className='types'>{statsElem[1].base_stat}</p>
                            </div>
                            <div className='stats-container-info'>
                                <p className='pokemon-info'>{statsElem[2].stat.name}</p>
                                <p className='types'>{statsElem[2].base_stat}</p>
                            </div>
                            <div className='stats-container-info'>
                                <p className='pokemon-info'>{statsElem[3].stat.name}</p>
                                <p className='types'>{statsElem[3].base_stat}</p>
                            </div>
                            <div className='stats-container-info'>
                                <p className='pokemon-info'>{statsElem[4].stat.name}</p>
                                <p className='types'>{statsElem[4].base_stat}</p>
                            </div>
                            <div className='stats-container-info'>
                                <p className='pokemon-info'>{statsElem[5].stat.name}</p>
                                <p className='types'>{statsElem[5].base_stat}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </article>
        </Link>
    )
}

export default PokemonCard