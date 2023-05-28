import { useDispatch, useSelector } from 'react-redux';

function PrincipalPokemonsSlider(){

  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch() 
       
    
}

export default PrincipalPokemonsSlider