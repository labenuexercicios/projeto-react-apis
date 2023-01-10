import * as React from 'react';
import { PokemonCardContainer } from './PokemonCard.styled';
import axios from 'axios';
import '../../style.css';
import { goToDetailsPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom'
import pokebola from "../../assets/pokebola.png"
import GlobalState from '../../contexts/GlobalState';
import { useContext, useEffect, useState } from "react";


export default function PokemonCard({ name, image, id, type }) {
  
  const [ pokedex, setPokedex] = useState([])

  const addToPokedex = (pokemonToAdd) => {
    const newPokedex = [...pokedex, pokemonToAdd]
    setPokedex(newPokedex) 
    
    const pokedexString = JSON.stringify(newPokedex)
    window.localStorage.setItem("pokeBrowser", pokedexString)
  }

  const [data, setData] = React.useState({});
  const [types, setTypes] = React.useState('');
  

  const getPokemonType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    data.types && data.types.map((type) => {
      setTypes(type.type.name);
    })
  }
  React.useEffect(() => {
    getPokemonType();
    console.log('types', types)

  }, []);

  const navigate = useNavigate()


  return (
    <PokemonCardContainer className={types}>


      {/* <div className='first'> */}

        {/* DIV PARA ID, NOME E TYPE */}

        <div className='second'>
          <p>#0{id}</p>
          <p>{name}</p>

          <div className='third'>

            {data.types && data.types.map((type) => {
              return <p className='type'>{type.type.name}</p>;

            })}
          </div>


        </div>          

            <div className='positionImg'>
            <img className='img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} />
            </div>

            {/* <img className='pokebolaFundo' src={pokebola} /> */}
          
          
          <div className='fourth'>
            <a className='details' onClick={() => goToDetailsPage(navigate, name)}>DETALHES</a>
            <button
              className='capturar'
              onClick={() => addToPokedex()}
              >
              CAPTURAR!
            </button>
          </div>

      {/* </div> */}


    </PokemonCardContainer>
  );
}