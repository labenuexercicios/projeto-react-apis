import { ButtonAllPokemons, DeletePokemon, HeaderContainer, Image } from './style'
import logo from '../../assets/header-logo.png'
import { Link } from 'react-router-dom'
import vector from '../../assets/Vector.png'
import { useContext } from 'react'
import { Context } from '../../context/createContext'
import pokedexImg from '../../assets/pokedexImg.svg'
import pokedexBall from '../../assets/pokeball.png'



export const Header = () => {
  const { buttonAllPokemons ,buttonPokedex , buttonHeaderDetail, RemovePokemon, details, setShowModalDelete} = useContext(Context)


  return (
    <HeaderContainer>
      <img src={pokedexImg} alt=""/>
      {buttonAllPokemons && <Link to={'/'}><ButtonAllPokemons><img style={{width: '7px', height: '14px', position: 'absolute', left: '-17px', top: '11px'}} src={vector} alt="" /> Todos Pokémons</ButtonAllPokemons></Link>}
      {buttonPokedex && <Link to={'/pokedex'}>
        <Image className='pokedexBall' src={pokedexBall} />
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
