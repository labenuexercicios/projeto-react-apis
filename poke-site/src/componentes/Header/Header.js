import React from 'react'
import NomePokemon from "../../imagens/NomePokemon.svg"
import HeaderStyle from "./Header.style"
const Header = () => {
  return (
    <HeaderStyle>
      <div className='todo-header'>
        <div className='botão'>
          <button><h1>Pokedex</h1></button>
        </div>
        <div className='nome-pokemon'>
          <img src={NomePokemon} alt="marca pokemon"></img>
        </div>
        <div className='botão-detalhes'>
          <button><h1>Detalhes</h1></button>
        </div>


      </div>
    </HeaderStyle>
  )
}

export default Header