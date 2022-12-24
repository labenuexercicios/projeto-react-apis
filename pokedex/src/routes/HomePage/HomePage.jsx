import React, { useContext, useState } from 'react'
import Header from '../Header/Header'
import { MainHomePage, TituloHome, ImgModalCapturar } from './HomePage.styled'
import CardPokemon from '../CardPokemon/CardPokemon'
import { GlobalContext } from '../../contexts/GlobalContext'
import Modal from 'react-modal'
import Capturar from '../../assets/Capturar2.png'

const HomePage = () => {
  const context = useContext(GlobalContext)
  const {
    cardTop,
    pokedex,
    modalOpen,
    closeModalCapturar,
    customStyle,
    nextPageHome,
    backPageHome,
    contador,
    nextPage,
    nextPage2
  } = context

  const filteredCardTop = () =>
    cardTop.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );
  return (
    <>
      <Header isHomePage={true} />
      <MainHomePage>
        <TituloHome>
          <h1>Todos Pokémons</h1>
          <div className='buttonDuplo'>
            <button className='btnTrocaPagina' onClick={() => backPageHome()}>back</button>
            <button className='btnTrocaPagina' onClick={() => nextPageHome()}>next</button>
          </div>
        </TituloHome>
        {filteredCardTop().map((pokemon) => (
          <CardPokemon
            pokemon={pokemon}
            isHomePage={true}
            key={pokemon.url}
            pokemonUrlCada={pokemon.url}
          />))}
      </MainHomePage>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModalCapturar}
        style={customStyle}
      >
        <ImgModalCapturar src={Capturar} />
      </Modal>
    </>
  )
}

export default HomePage