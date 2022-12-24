import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  BoxCard,
  EsquerdoCard,
  DireitoCard,
  ImgFundo,
  ImgPrincipal,
  ButtonCapturar,
  ButtonCapturar2,
  TypeImg,
  TypeImg2,
} from './Poke.styled'
import { useEffect, useState } from 'react'
import Fundo from '../../assets/Fundo.png'
import { getTypes } from '../utils/ReturnPokemonType'
import { getColors } from '../utils/ReturnCardColor'
import { GlobalContext } from '../../contexts/GlobalContext'



const CardPokemon = (props, { showLink = true }) => {
  const context = useContext(GlobalContext)
  const { cardTop, addToPokedex, removeFromPokedex, pokedex, setFlow } = context
  const [cadaPokemon, setCadaPokemon] = useState([])
  const [cadaPokemonImg, setCadaPokemonImg] = useState([])
  const [poder, setPoder] = useState([])
  const [poder2, setPoder2] = useState([])
  const [poder3, setPoder3] = useState([])
  const { pokemonUrlCada, isHomePage, isPokedex, pokemon,openModalCapturar } = props

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
    setCadaPokemonImg(cadaPokemon['sprites']['other']['official-artwork']['front_default'])
    setPoder(cadaPokemon['types']['0']['type']['name'])
    setPoder2(cadaPokemon['types']['1']['type']['name'])
  }
  const type2Pokedex = async () => {
    setPoder3(pokemon['types']['1']['type']['name'])
  }
  useEffect(() => {
    renderPokemon()
  }, [cardTop])

  useEffect(() => {
    renderImagem()
  }, [renderPokemon])
  useEffect(() => {
    type2Pokedex()
  }, [pokedex])

  return (
    <>
      {isHomePage && <BoxCard color={getColors(poder)}>
        <EsquerdoCard>
          {cadaPokemon.id < 10 ? (<p>{"#0" + cadaPokemon.id}</p>) : (<p>{"#" + cadaPokemon.id}</p>)}
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          {poder2.length > 1 && <span>{<TypeImg src={getTypes(poder2)} />}</span>}
          {poder.length > 1 && <span>{<TypeImg2 src={getTypes(poder)} />}</span>}
          <div className='linkDetalhes'>
            {showLink && <Link onClick={()=>{setFlow(2)}} className='nameDetalhes' to={`/detalhes/${pokemon.name}`}>Detalhes</Link>}
          </div>
        </EsquerdoCard>
        <DireitoCard>
          {cadaPokemon && <ImgPrincipal src={cadaPokemonImg} alt="cadaImg" />}
          <ImgFundo src={Fundo} />
          <ButtonCapturar onClick={() => addToPokedex(cadaPokemon)}>Capturar!</ButtonCapturar>
        </DireitoCard>
      </BoxCard>}
      {isPokedex && cardTop.length > 1 && <BoxCard color={getColors(pokemon['types']['0']['type']['name'])}>
        <EsquerdoCard>
          {pokemon.id < 10 ? (<p>{"#0" + pokemon.id}</p>) : (<p>{"#" + pokemon.id}</p>)}
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          {poder3.length > 1 && pokemon['types']['1']?.type.name && <span>{<TypeImg src={getTypes(pokemon['types']['1']?.type.name)} />}</span>}
          {pokemon['types']['0']['type']['name'] && <span>{<TypeImg2 src={getTypes(pokemon['types']['0']['type']['name'])} />}</span>}
          <div className='linkDetalhes'>
            {showLink && <Link onClick={()=>{setFlow(1)}} className='nameDetalhes' to={`/detalhes/${pokemon.name}`}>Detalhes</Link>}
          </div>
        </EsquerdoCard>
        <DireitoCard>
          {cadaPokemon && <ImgPrincipal src={pokemon['sprites']['other']['official-artwork']['front_default']} alt="cadaImg" />}
          <ImgFundo src={Fundo} />
          <ButtonCapturar2 onClick={() => removeFromPokedex(pokemon)}>Excluir</ButtonCapturar2>
        </DireitoCard>
      </BoxCard>}


    </>
  )
}

export default CardPokemon