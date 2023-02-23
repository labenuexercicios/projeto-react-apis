import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/createContext/GlobalContext'
import {Tipos} from '../../utils/Types'
import logoPoke from '../../image/logoPoke.png'
import {Cores} from '../../utils/Colors'
import { ContainerCard, ContainerHome, ID, Name, Tipo, Tipo2 } from './styled'
export const Pokedex = () => {

  const {pokemons1,removePokemon,setDetalhes,addPokemon}= useContext(Context)

  return (
    <ContainerHome> 
      {pokemons1.map((pokemon)=>{
        return (
          
          <ContainerCard cor={Cores(pokemon.types !== undefined && pokemon.types[0].type.name)}>
          <ID>#{pokemon.id}</ID>
          <Name><h2>{pokemon.name}</h2></Name>
          <Tipo>{Tipos(pokemon.types !== undefined && pokemon.types[1].type.name)}</Tipo>
          <Tipo2>{Tipos(pokemon.types !== undefined && pokemon.types[0]?.type.name)}</Tipo2>
          <Link to={`/detalhes/${pokemon.name}`}>
            <div onClick={()=>setDetalhes(pokemon)}>
          <button className='BotaoDetails'>Detalhes</button>
          </div>
          </Link>
          <img className='imagenPrincipal' src={pokemon.sprites?.other?.["official-artwork"]?.["front_default"]}/>
          <img className='imagePoke' src={logoPoke} />
          <button className='capturar' onClick={()=>removePokemon(pokemon)}>remover</button>
          </ContainerCard>
          
        )
      })}
      {console.log(pokemons1)}
    </ContainerHome>
  )
}

