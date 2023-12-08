import React from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import Header from "../../components/Header/Header"
import { useEffect, useState, useContext } from "react";
import { Container, TitleDetails, ModalCapture } from "./Details.styled";
import { useParams } from 'react-router-dom'
import CardDetails from "../../components/CardDetails/CardDetails"
import Modal from 'react-modal'

const Details = () => {

  const context = useContext(GlobalContext)
  const { closeModalCapture, modalOpen, customStyle, flow } = context

  const {id} = useParams()
  const [details, setDetails] = useState(null)
  const [typeDetails, setTypeDetails] = useState([])
  const [typeDetails2, setTypeDetails2] = useState([])
  const [base, setBase] = useState([])

const fetchDetails = async () => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await APIResponse.json()
    setDetails(data)
    setTypeDetails(data['types']['0']['type']['name'])
    setTypeDetails2(data['types']['1']['type']['name']) 
}

const functionBaseStart2 = async () => {
  setBase(details['stats'])
}

useEffect(()=>{
  fetchDetails()
  // eslint-disable-next-line
},[])
useEffect(()=>{
  functionBaseStart2()
  // eslint-disable-next-line
},[fetchDetails])


  return (
    <>
    <Header details={details}/>
    <Container>
      <TitleDetails><h2>Detalhes</h2></TitleDetails>
      {details && 
        <CardDetails base={base} details={details} typeDetails={typeDetails} typeDetails2={typeDetails2}/>}
    </Container>
    <Modal
        bodyOpenClassName={"modalClasse"}
        isOpen={modalOpen}
        onRequestClose={closeModalCapture}
        style={customStyle}
      >
        {flow === 1 &&
          <ModalCapture>
            <h1>Gotcha!</h1>
            <p>O Pokémon foi adicionado a sua Pokédex</p>
          </ModalCapture>}
        {flow === 2 &&
          <ModalCapture>
            <h1>Oh, no</h1>
            <p>O Pokémon foi removido da sua Pokédex</p>
          </ModalCapture>}
    </Modal>
    </>
  )
}

export default Details