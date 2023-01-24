import React from 'react'
import CardDetails from '../../components/cardDetailsPokemon'
import Header from '../../components/header'
import { Main } from '../desktop1/styled'

const Detalhes = () => {
    return (
        <div>
            <Header />
            <Main>
                <CardDetails />
            </Main>
        </div>
    )
}

export default Detalhes
