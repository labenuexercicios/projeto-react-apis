import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BoxCard,
   EsquerdoCard,
   DireitoCard,
   ImgFundo, 
   ImgPrincipal,
   ButtonCapturar,
   ButtonCapturar2,
   TypeImg,
   TypeImg2,
   PageDetalhes
  } from './Poke.styled'
import { useEffect, useState } from 'react'
import Fundo from '../../assets/Fundo.png'
import { getTypes } from '../utils/ReturnPokemonType'
import { getColors } from '../utils/ReturnCardColor'
import { GlobalContext } from '../../contexts/GlobalContext'

const CardPokemon = (props,{ showLink = true}) => {
  const context = useContext(GlobalContext)
  const {cardTop, addToPokedex,removeFromPokedex,pokedex}= context
  const [cadaPokemon, setCadaPokemon] = useState([])
  const [cadaPokemonImg, setCadaPokemonImg] = useState([])
  const [poder, setPoder] = useState([])
  const [poder2, setPoder2] = useState([])
  const [poder3, setPoder3] = useState([])
  const {pokemonUrlCada, isHomePage, isPokedex} = props
  
  const fetchPokemon2 = async () => {

    const APIResponse = await fetch(pokemonUrlCada)
    const data = await APIResponse.json()
    return data
}
const renderPokemon = async (pokemon) => { 
    const resData = await fetchPokemon2(pokemon)
    setCadaPokemon(resData)
}
const renderImagem = async () => {
   setCadaPokemonImg(cadaPokemon['sprites']['versions']['generation-v']
   ['black-white']['animated']['front_default'])
   setPoder(cadaPokemon['types']['0']['type']['name'])
   setPoder2(cadaPokemon['types']['1']['type']['name'])
}
const type2Pokedex = async () => {
   setPoder3(props.pokemon['types']['1']['type']['name'])
}

useEffect(()=>{
   renderPokemon()
},[cardTop])

useEffect(()=>{
  renderImagem()
},[renderPokemon])
useEffect(()=>{
  type2Pokedex()
},[pokedex])
 
  return(
    <>
   {isHomePage && <BoxCard color={getColors(poder)}>
        <EsquerdoCard>
          {cadaPokemon.id < 10 ? (<p>{"#0"+cadaPokemon.id}</p>):(<p>{"#"+cadaPokemon.id}</p>)}
          <h2>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</h2>
          { poder2.length > 1 && <span>{<TypeImg src={getTypes(poder2)}/>}</span>}
          { poder.length > 1 && <span>{<TypeImg2 src={getTypes(poder)}/>}</span>}
       <div className='linkDetalhes'>
        {showLink && <Link className='nameDetalhes' to={`/detalhes/${props.pokemon.name}`}>Detalhes</Link>}
        </div>
        </EsquerdoCard>
        <DireitoCard>
         {cadaPokemon && <ImgPrincipal src={cadaPokemonImg} alt="cadaImg"/>}
         <ImgFundo src={Fundo} />
         <ButtonCapturar onClick={()=>addToPokedex(cadaPokemon)}>Capturar!</ButtonCapturar>
        </DireitoCard>
    </BoxCard>}
  {isPokedex && cardTop.length > 1 && <BoxCard color={getColors(props.pokemon['types']['0']['type']['name'])}>
        <EsquerdoCard>
          {props.pokemon.id < 10 ? (<p>{"#0"+props.pokemon.id}</p>):(<p>{"#"+props.pokemon.id}</p>)}
          <h2>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</h2>
          { poder3.length > 1 && props.pokemon['types']['1']['type']['name'].includes(poder3) && <span>{<TypeImg src={getTypes(poder3)}/>}</span>}
          {props.pokemon['types']['0']['type']['name'] && <span>{<TypeImg2 src={getTypes(props.pokemon['types']['0']['type']['name'])}/>}</span>}
        <div className='linkDetalhes'>
        {showLink && <Link className='nameDetalhes' to={`/detalhes/${props.pokemon.name}`}>Detalhes</Link>}
        </div>
        </EsquerdoCard>
        <DireitoCard>
         {cadaPokemon && <ImgPrincipal src={props.pokemon['sprites']['versions']['generation-v']
         ['black-white']['animated']['front_default']} alt="cadaImg"/>}
         <ImgFundo src={Fundo} />
         <ButtonCapturar2 onClick={()=>removeFromPokedex(props.pokemon)}>Excluir</ButtonCapturar2>
        </DireitoCard>
    </BoxCard>}
    </>
  )
}

export default CardPokemon