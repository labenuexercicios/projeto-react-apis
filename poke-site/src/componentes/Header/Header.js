import React from 'react'
import NomePokemon from "../../imagens/NomePokemon.svg"
import HeaderStyle from "./Header.style"
import { useNavigate, useLocation } from 'react-router-dom'
import { vaiParaDetalhes, vaiParaHome, vaiParaPokedex } from '../../Rotas/cordenation'



const Header = () => {


  const navigate = useNavigate()
  const local = useLocation()

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
        case "/detalhes/":
          return (
            <div className='todo-header'>
              <div className='botao'>
                <a onClick={() => vaiParaHome(navigate)}><h2>Todos os Pokemons</h2></a>
              </div>
              <div className='imagem'>
                <img src={NomePokemon} alt="marca pokemon"></img>
              </div>
              <div className='vazia'>
                <button >Excluir da Pokedex</button>
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
  // return (
  //   <HeaderStyle>
  //     <div className='todo-header'>
  //       <div className='botão'>
  //         <button onClick={()=>vaiParaPokedex(navigate)}><h1>Pokedex</h1></button>
  //       </div>
  //       <div className='nome-pokemon'>
  //         <img src={NomePokemon} alt="marca pokemon"></img>
  //       </div>
  //       <div className='botão-detalhes'>
  //         <button onClick={() => vaiParaDetalhes(navigate)}><h1>Detalhes</h1></button>
  //       </div>
  //     </div>
  //   </HeaderStyle>
  // )
}

export default Header