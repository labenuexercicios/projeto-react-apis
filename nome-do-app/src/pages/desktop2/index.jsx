import React from 'react'
import Header from '../../components/header'
import SectionPokedex from '../../components/sectionPokedex'
import { Main } from '../desktop1/styled'

const PokedexPage = () => {
    return (
        <div>
            <Header />
            <Main>
                <SectionPokedex />
            </Main>
        </div>
    )
}

export default PokedexPage
