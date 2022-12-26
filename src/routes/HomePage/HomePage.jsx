import React, { useContext, useState } from 'react'
import Header from '../Header/Header'
import { MainHomePage, TituloHome, ModalCapturar } from './HomePage.styled'
import CardPokemon from '../CardPokemon/CardPokemon'
import { GlobalContext } from '../../contexts/GlobalContext'
import Modal from 'react-modal'


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
    backInicio,
    nextFinal,
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
            {contador > 1 && <button className='primeiroUltimoPoke' onClick={() => backInicio()}>1</button>}
            <button className='btnTrocaPagina' onClick={() => backPageHome()}>back</button>
            <button className='btnTrocaPagina' onClick={() => nextPageHome()}>next</button>
            {contador > 1 && <button className='primeiroUltimoPoke' onClick={() => nextFinal()}>850</button>}
          </div>
        </TituloHome>
        {filteredCardTop().map((pokemon) => (
          <CardPokemon
            pokemon={pokemon}
            isHomePage={true}
            key={pokemon.url}
            pokemonUrlCada={pokemon.url}
          />))}
          <Modal
        bodyOpenClassName={"modalClasse"}
        isOpen={modalOpen}
        onRequestClose={closeModalCapturar}
        style={customStyle}
      >
        <ModalCapturar>
               <h1>Gotcha!</h1>
               <p>O Pokémon foi adicionado a sua Pokédex</p>
        </ModalCapturar>
      </Modal>
      </MainHomePage>
    </>
  )
}

export default HomePage