import React, { useContext, useEffect, useState } from 'react'
import { ContainerCardPokemon } from './style'
import axios from 'axios'
import { Colors } from '../../helpers/Colors'
import { Type } from '../../helpers/Type'
import pokedex from '../../assets/pokedex.png'
import { Context } from '../../context/createContext'
import { Link } from 'react-router-dom'

export const CardPokedex = ({ pokemon }) => {
  const [pokedexCard, setPokedexCard] = useState([])
  const {addPokemon, putDetails, setShowModalCapture, setDeletePokemonButton, pokemons, setButtonHeaderDetail, setButtonAllPokemons, setButtonPokedex} = useContext(Context)


  const handleAPICard = axios.create({
    baseURL: `${pokemon.url}`
  })

  const getRequestPokedexCard = async () => {
    const response = await handleAPICard.get()
    const data = await response.data
    setPokedexCard(data)
  }

  const buttonsHeader = () => {
    setButtonAllPokemons(false)
    setButtonPokedex(true)
    setButtonHeaderDetail(false)
  }

  useEffect(() => {
    buttonsHeader()
    getRequestPokedexCard()
  }, [])

  const Id = pokedexCard.id !== undefined && pokedexCard.id >= 10 ? pokedexCard.id : `0${pokedexCard.id}`



  return (
    <ContainerCardPokemon>
      <div  style={{ backgroundColor: `${Colors(pokedexCard.types !== undefined && pokedexCard.types[0].type.name)}` }}>
        <div className="IdNameDetail">
          <div className="infoIdNameDetail">
            <span className="Id">#{Id}</span>
            <span className="Name">{pokedexCard.name}</span>
            <div className='Type'>
              <span >{Type(pokedexCard.types !== undefined && pokedexCard.types[0].type.name)}</span>
              <span >{Type(pokedexCard.types !== undefined && pokedexCard.types[1]?.type.name)}</span>
            </div>
          </div>
          <div className='DetailContainer' onClick={() => pokemons.includes(pokedexCard) && setDeletePokemonButton(true)}>
            <Link to={`/detail/${pokedexCard.name}`} >
              <span className='Detail' onClick={() => putDetails(pokedexCard)}>Detalhes</span>
            </Link>
            
          </div>
        </div>
        <div className="PictureAdd">
          <img className='PokedexImg' src={pokedex} alt="" />
            <img className='PokemonImg'
              src={pokedexCard.sprites?.other?.["official-artwork"]?.["front_default"]}
              alt=""
            />
            <div className='ContainerCapture' onClick={() => setShowModalCapture(true)}>
              <button className='Capture' onClick={() => addPokemon(pokedexCard)}>Capturar!</button>
            </div>
          </div>
      </div>
    </ContainerCardPokemon>
  )
}