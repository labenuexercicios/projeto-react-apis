import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import CardDetalhes from '../CardDetalhes/CardDetalhes'
import { ContainerPrincipal, TituloDetalhes } from './Detalhes.styled'
import Fundo from '../../assets/FundoDetalhes.png'


const Detalhes = () => {
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
      <Header isDetalhes={true} details={details}/>
      <ContainerPrincipal>
        <TituloDetalhes><h2>Detalhes</h2></TituloDetalhes>
        {details && <CardDetalhes isLoading={isLoading} base={base} details={details} typeDetalhes={typeDetalhes} typeDetalhes2={typeDetalhes2} />}
      </ContainerPrincipal>
    </>
  )
}

export default Detalhes