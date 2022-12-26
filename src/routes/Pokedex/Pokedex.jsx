import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import CardPokemon from '../CardPokemon/CardPokemon'
import Header from '../Header/Header'
import { MainPokedex, TituloPokedex, ModalRemover } from './Pokedex.styled'
import Excluir from '../../assets/Remover2.png'
import Modal from 'react-modal'

const Pokedex = (props) => {
  const context = useContext(GlobalContext)
  const { pokedex, setPokedex, modalOpen, closeModalCapturar, customStyle } = context

  function excluirTodosPokedex() {
    const arrayVazio = []
    setPokedex(arrayVazio)
    const pokedexString = JSON.stringify(arrayVazio)
    window.localStorage.setItem("pokemon", pokedexString)
  }

  return (
    <>
      <Header isPokedex={true} />
      <MainPokedex>
        <TituloPokedex><h1>Meus Pokémons</h1><h1>({pokedex.length})</h1>{pokedex.length >= 1 && <button onClick={() => excluirTodosPokedex()} className='excluirTodos'>Excluir todos</button>}</TituloPokedex>
        {pokedex && pokedex.map((pokemon) => {
          return <CardPokemon
            pokemon={pokemon}
            isPokedex={true}
            key={pokemon.url}
            pokemonUrlCada2={pokemon.url}

          />
        })}
      </MainPokedex>
      <Modal
        bodyOpenClassName={"modalClasse"}
        isOpen={modalOpen}
        onRequestClose={closeModalCapturar}
        style={customStyle}
      >
        <ModalRemover>
          <h1>Oh, no</h1>
          <p>O Pokémon foi removido da sua Pokédex</p>
        </ModalRemover>
      </Modal>
    </>
  )
}

export default Pokedex