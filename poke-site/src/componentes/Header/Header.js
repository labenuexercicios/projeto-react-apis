import React from 'react'
import NomePokemon from "../../imagens/NomePokemon.svg"
import HeaderStyle from "./Header.style"
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { vaiParaDetalhes, vaiParaHome, vaiParaPokedex } from '../../Rotas/cordenation'
import { useContext } from 'react'
import { GlobalContext } from "../../Rotas/Context/GlobalContext"


const Header = (props) => {


  const context = useContext(GlobalContext)
  const {
    arrayPokedex,
    setArrayPokedex,
  } = context

  const params = useParams()

  const navigate = useNavigate()
  const local = useLocation()



  const removeDaPokedex = (removePokemon) => {
    const novoArrayPokedex = arrayPokedex
      .filter((pokemonNaPokedex) => pokemonNaPokedex.name !== removePokemon.data?.name)
    setArrayPokedex(novoArrayPokedex)
    console.log('AQUI', novoArrayPokedex)
    localStorage.setItem("pokedex", JSON.stringify(novoArrayPokedex))
  }

  const botaoHeader = () => {

    switch (local.pathname) {
      case "/":
        return (
          <div className='todo-header'>
            <div className='botao'>
              <button onClick={() => vaiParaPokedex(navigate)}><h2>Pokedex</h2></button>
            </div>
            <div className='imagem'>
              <img src={NomePokemon} alt="marca pokemon"></img>
            </div>
            <div className='vazia'>

            </div>
          </div>
        )
      case "/pokedex":
        return (
          <div className='todo-header'>
            <div className='botao'>
              <a onClick={() => vaiParaHome(navigate)}><h3>Todos os Pokemons</h3></a>
            </div>
            <div className='imagem'>
              <img src={NomePokemon} alt="marca pokemon"></img>
            </div>
            <div className='vazia'>

            </div>
          </div>
        )
      case `/detalhes/${params.nomePokemon}`:
        return (
          <div className='todo-header'>
            <div className='botao'>
              <a onClick={() => vaiParaHome(navigate)}><h2>Todos os Pokemons</h2></a>
            </div>
            <div className='imagem'>
              <img src={NomePokemon} alt="marca pokemon"></img>
            </div>
            <div className='vazia'>
              <button onClick={() => removeDaPokedex(props.detalhes)} >Excluir da Pokedex</button>
            </div>
          </div>
        )
      default:
        return (
          <div className='botão'>
            <button onClick={() => vaiParaHome(navigate)}><h2> Voltar para página inicial</h2></button>
          </div>
        )
    }
  }
  return (
    <HeaderStyle>
      {botaoHeader()}
    </HeaderStyle>
  )

}

export default Header