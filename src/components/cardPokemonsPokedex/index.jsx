import React, { useContext } from 'react'
import { Type } from '../../helpers/Type'
import { Link } from 'react-router-dom'
import pokedex from '../../assets/pokedex.png'
import { Context } from '../../context/createContext'
import { Colors } from '../../helpers/Colors'
import { ContainerPokedex } from './style'

export const PokemonsPokedex = ({pokemon}) => {
  const{ putDetails, RemovePokemon, setShowModalDelete, setDeletePokemonButton} = useContext(Context)

  


  return (
   <ContainerPokedex>
     <div style={{ backgroundColor: `${Colors(pokemon.types !== undefined && pokemon.types[0].type.name)}` }}>
        <div className="IdNameDetail">
          <div className="infoIdNameDetail">
            <span className="Id">#{pokemon.id}</span>
            <span className="Name">{pokemon.name}</span>
            <div className='Type'>
              <span >{Type(pokemon.types !== undefined && pokemon.types[0].type.name)}</span>
              <span >{Type(pokemon.types !== undefined && pokemon.types[1]?.type.name)}</span>
            </div>
          </div>
          <div className='DetailContainer' onClick={() => setDeletePokemonButton(true)}>
            <Link to={`/detail/${pokemon.name}`}>
              <span className='Detail' onClick={() => putDetails(pokemon)}>Detalhes</span>
            </Link>
            
          </div>
        </div>
        <div className="PictureAdd">
          <img className='PokedexImg' src={pokedex} alt="" />
            <img className='PokemonImg'
              src={pokemon.sprites?.other?.["official-artwork"]?.["front_default"]}
              alt=""
            />
            <div onClick={() => setShowModalDelete(true)} className='ContainerCapture'>
              <button onClick={() => RemovePokemon(pokemon)} className='Remove'>Excluir</button>
            </div>
        </div>
      </div>
   </ContainerPokedex>
  )
}
