import { HeaderContainer, Link, Logo, ButtonExcluir, Button } from "./style"
import logo from "../../Assets/logo.png";
import {handlePokedex} from "../../Router/Cordinator"
import { useNavigate } from "react-router-dom";
import { usePokemon } from '../../Contexts/pokedexContext'

const Header = ({ showAllPokemons, showPokedexBtn, showDeletePokemonBtn, pokemonName }) => {
  const navigate = useNavigate();
  const { removeToPokedex } = usePokemon()

  return (
    <HeaderContainer>
      {showAllPokemons ? <div>  {"<"}  <Link to = {"/"}> Todos Pokémons </Link> </div> : <div className="null"></div>}

      <Logo src={logo} alt="logo" />

      {showPokedexBtn ? (
      <Button onClick={()=>handlePokedex(navigate)}>Pokédex</Button>
      ) : (
        showDeletePokemonBtn ? (
          <ButtonExcluir onClick={()=> removeToPokedex(pokemonName)}>Excluir da Pokédex</ButtonExcluir>
        ) : (
          <div className="null"></div>
        )
      )}
    </HeaderContainer>
  )
}

export default Header