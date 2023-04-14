import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { ContainerDetails } from './Details.styles'
import { DetailsCard } from '../../components/DetailsCard/DetailsCard'
import pokebola from '../../assets/pokebola-go.png'
import { Flex, Image } from '@chakra-ui/react'
import { GlobalContext } from '../../contexts/GlobalContext'

export const Details = () => {

  const context = useContext(GlobalContext)
  const {openContact} = context

  return (
    <>
      <Header />
      <ContainerDetails>
        <h1>Detalhes</h1>
        <DetailsCard />
      </ContainerDetails>
      <Flex
        position='fixed'
        height='100px'
        width='100px'
        bottom='2vh'
        right='8vw'
        zIndex='1000'
        >
        <Image src={pokebola} alt="Pokebola" onClick={()=>openContact()}/>
      </Flex>
    </>
  )
}
