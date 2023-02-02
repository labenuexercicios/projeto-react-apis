import React from 'react'
import Header from '../../components/headers'
import SectionDetalhes from '../../components/SectionDetalhes'
import TxtMain from '../../components/TxtMaIn'
import { ContainerMain } from '../home/styled'

const Details = () => {
    return (
        <div>
            <Header />
            <ContainerMain>
                <TxtMain texto = {`Detalhes`}/>
                <SectionDetalhes/>
            </ContainerMain>
        </div>
    )
}

export default Details
