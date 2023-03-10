import { ButtonAllPokemons, ButtonPokedex, DeletePokemon, HeaderContainer } from './style'
import logo from '../../assets/header-logo.png'
import { Link } from 'react-router-dom'
import vector from '../../assets/Vector.png'
import { useContext } from 'react'
import { Context } from '../../context/createContext'

export const Header = () => {
  const { buttonAllPokemons ,buttonPokedex , buttonHeaderDetail, RemovePokemon, details, setShowModalDelete} = useContext(Context)


  return (
    <HeaderContainer>
      <img src={logo} alt=""/>
      {buttonAllPokemons && <Link to={'/'}><ButtonAllPokemons><img style={{width: '7px', height: '14px', position: 'absolute', left: '-17px', top: '11px'}} src={vector} alt="" /> Todos Pokémons</ButtonAllPokemons></Link>}
      {buttonPokedex && <Link to={'/pokedex'}>
        <ButtonPokedex >Pokédex</ButtonPokedex>
      </Link>}
      {buttonHeaderDetail && <div onClick={() => setShowModalDelete(true)}>
        <span onClick={() => RemovePokemon(details)}>
          <DeletePokemon>Excluir da Pokédex</DeletePokemon>
        </span>
      </div>
        }
    </HeaderContainer>
  )
}
