import pokemonHeader from '../../assets/PokemonHeader.png'
import { StyleButton, StyleHeader, StyleImg } from './HeaderStyle';

function Header(){
    return(
        <StyleHeader>
            <StyleImg src={pokemonHeader}/>
            <StyleButton>Pokedex</StyleButton>
        </StyleHeader>
    )
}

export default Header;