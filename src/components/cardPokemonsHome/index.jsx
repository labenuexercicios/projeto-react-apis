import React, { useContext, useEffect, useState } from 'react'
import { ContainerCardPokemon } from './style'
import axios from 'axios'
import { Colors } from '../../helpers/Colors'
import { Type } from '../../helpers/Type'
import pokedex from '../../assets/pokedex.png'
import { Context } from '../../context/createContext'
import { Link } from 'react-router-dom'
import { darken } from 'polished'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    AOS.init();
  }, [])
  

  const Id = pokedexCard.id !== undefined && pokedexCard.id >= 10 ? pokedexCard.id : `0${pokedexCard.id}`



  return (
    <ContainerCardPokemon >
      <div data-aos="zoom-in-up" style={{ backgroundColor: `${Colors(pokedexCard.types !== undefined && pokedexCard.types[0].type.name)}`, border: `2px solid ${darken(0.25, Colors(pokedexCard.types !== undefined && pokedexCard.types[0].type.name))}`}}>
        <div className="IdNameDetail">
          <div className="infoIdNameDetail">
            <span className="Id" style={{color: `${darken(0.3, Colors(pokedexCard.types !== undefined && pokedexCard.types[0].type.name))}`}}>#{Id}</span>
            <span className="Name" style={{color: `${darken(0.3, Colors(pokedexCard.types !== undefined && pokedexCard.types[0].type.name))}`}}>{pokedexCard.name}</span>
            <div className='Type'>
              <span >{Type(pokedexCard.types !== undefined && pokedexCard.types[0].type.name)}</span>
              <span >{Type(pokedexCard.types !== undefined && pokedexCard.types[1]?.type.name)}</span>
            </div>
          </div>
          <div className='DetailContainer' onClick={() => pokemons.includes(pokedexCard) && setDeletePokemonButton(true)}>
            <Link to={`/detail/${pokedexCard.name}`}  >
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
            <div  className='ContainerCapture' onClick={() => setShowModalCapture(true)}>
              <button style={{color: `${darken(0.1, Colors(pokedexCard.types !== undefined && pokedexCard.types[0].type.name))}`}} className='Capture' onClick={() => addPokemon(pokedexCard)}>Capturar!</button>
            </div>
          </div>
      </div>
    </ContainerCardPokemon>
  )
}
