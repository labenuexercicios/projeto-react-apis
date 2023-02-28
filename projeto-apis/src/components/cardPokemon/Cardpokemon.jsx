import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ContainerCard, ID, Name, Tipo, Tipo2 } from './styled'
import { Tipos } from '../../utils/Types'
import {  Cores } from '../../utils/Colors'
import logoPoke from '../../image/logoPoke.png'
import { Context } from '../../context/createContext/GlobalContext'
import { Link } from 'react-router-dom'

export default function Cardpokemon({pokemon}) {

  const {addPokemon,pokemons1,setDetalhes}=useContext(Context)

  // console.log(pokemons1)

  const [pokemons,setPokemons]= useState([])
  const pokeRequ = axios.create({
    baseURL:`${pokemon.url}`
  })
  const pokeRequ2 = async()=>{
    const response = await pokeRequ.get()
    const pokeDados = await response.data
    setPokemons(pokeDados)
  }
  useEffect(()=>{
    pokeRequ2()
  },[])

  // console.log(pokemons)

  const Id = pokemons.id >= 10? pokemons.id : `0${pokemons.id}`
  return(
    
    <ContainerCard cor={Cores(pokemons.types !== undefined && pokemons.types[0].type.name)}>
      <ID>#{Id}</ID>
      <Name><h2>{pokemons.name}</h2></Name>
      <Tipo>{Tipos(pokemons.types !== undefined && pokemons.types[0].type.name)}</Tipo>
      <Tipo2>{Tipos(pokemons.types !== undefined && pokemons.types[1]?.type.name)}</Tipo2>
      <Link to={`/detalhes/${pokemons.name}`}>
        <div onClick={()=>setDetalhes(pokemons)}>
      <button className='BotaoDetails'>Detalhes</button>
      </div>
      </Link>
      <img className='imagenPrincipal' src={pokemons.sprites?.other?.["official-artwork"]?.["front_default"]}/>
      <img className='imagePoke' src={logoPoke} />
      <button className='capturar' onClick={()=>addPokemon(pokemons)}>Capturar</button>
      </ContainerCard>
  )
}
