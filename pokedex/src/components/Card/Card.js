import React from "react";
import * as style from "../Card/styleCard"
import {detailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const Card = ( {newListPokemons,addPokedex}) => {
  const navigate = useNavigate()
  const listPokemon = JSON.parse(localStorage.getItem("pokemonHome"))
  
  return (
    <>
    {listPokemon !== null && listPokemon.length > 0 ? listPokemon.map((poke,index) => {
      return (
        <style.Card 
          key={poke.name}
          style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
            poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
            poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
            poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
            poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
        }>
          <style.BoxImage>
            <style.Img src={poke.sprites.other.dream_world.front_default}/>
          </style.BoxImage>
          <style.NamePkm >{poke.name}</style.NamePkm>
          <style.DivBtn>
            <style.Button onClick={ () => addPokedex(poke,index)}>Catch!</style.Button> 
            <style.Button  onClick={ () => detailPage(navigate, poke.name) }>Info</style.Button>
          </style.DivBtn>
        </style.Card> 
      )}) 
     : newListPokemons && newListPokemons.map((poke,index)=>{ 
      return (
        <style.Card 
          key={poke.name}
          style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
            poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
            poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
            poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
            poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
        }>
          <style.Img src={poke.sprites.other.home.front_default}/>
          <style.NamePkm >{poke.name}</style.NamePkm>
          <style.DivBtn>
            <style.Button onClick={ () => addPokedex(poke,index)}>Adicionar</style.Button> 
            <style.Button  onClick={ () => detailPage(navigate, poke.name) }>Detalhes</style.Button>
          </style.DivBtn>
        </style.Card> 
      )})}
    </>
  )
}