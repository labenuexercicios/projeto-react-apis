import React from 'react'
import NomePokemon from "../../imagens/NomePokemon.svg"
import HeaderStyle from "./Header.style"
import { useNavigate } from 'react-router-dom'
import { vaiParaDetalhes } from '../../Rotas/cordenation'
import { vaiParaPokedex } from '../../Rotas/cordenation'

const Header = () => {

  const navigate = useNavigate()

  return (
    <HeaderStyle>
      <div className='todo-header'>
        <div className='botão'>
          <button onClick={()=>vaiParaPokedex()}><h1>Pokedex</h1></button>
        </div>
        <div className='nome-pokemon'>
          <img src={NomePokemon} alt="marca pokemon"></img>
        </div>
        <div className='botão-detalhes'>
          <button onClick={() => vaiParaDetalhes(navigate)}><h1>Detalhes</h1></button>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header