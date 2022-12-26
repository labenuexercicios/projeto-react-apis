import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import CardDetalhes from '../CardDetalhes/CardDetalhes'
import { ContainerPrincipal, TituloDetalhes, ModalCapturar2 } from './Detalhes.styled'
import { GlobalContext } from '../../contexts/GlobalContext'
import Modal from 'react-modal'

const Detalhes = () => {
  const context = useContext(GlobalContext)
  const { closeModalCapturar, modalOpen, customStyle, flow } = context

  const urlCadaPoke = `https://pokeapi.co/api/v2/pokemon/`
  const { id } = useParams()
  const [details, setDetails] = useState(null)
  const [typeDetalhes, setTypeDetalhes] = useState([])
  const [typeDetalhes2, setTypeDetalhes2] = useState([])
  const [base, setBase] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const fetchDetalhes = async (url) => {
    setIsLoading(true)
    const APIResponse = await fetch(url)
    const data = await APIResponse.json()
    setDetails(data)
    setTypeDetalhes(data['types']['0']['type']['name'])
    setTypeDetalhes2(data['types']['1']['type']['name'])
  }
  const functionBaseStart2 = async () => {
    setBase(details['stats'])
    setIsLoading(false)
  }

  useEffect(() => {
    const pokemonUrl = `${urlCadaPoke}${id}`
    fetchDetalhes(pokemonUrl)
  }, [])
  useEffect(() => {
    functionBaseStart2()
  }, [fetchDetalhes])

  return (
    <>
      <Header isDetalhes={true} details={details} />
      <ContainerPrincipal>
        <TituloDetalhes><h2>Detalhes</h2></TituloDetalhes>
        {details && <CardDetalhes isLoading={isLoading} base={base} details={details} typeDetalhes={typeDetalhes} typeDetalhes2={typeDetalhes2} />}
      </ContainerPrincipal>
      <Modal
        bodyOpenClassName={"modalClasse"}
        isOpen={modalOpen}
        onRequestClose={closeModalCapturar}
        style={customStyle}
      >
        {flow === 1 &&
          <ModalCapturar2>
            <h1>Gotcha!</h1>
            <p>O Pokémon foi adicionado a sua Pokédex</p>
          </ModalCapturar2>}
        {flow === 2 &&
          <ModalCapturar2>
            <h1>Oh, no</h1>
            <p>O Pokémon foi removido da sua Pokédex</p>
          </ModalCapturar2>}
      </Modal>
    </>
  )
}

export default Detalhes