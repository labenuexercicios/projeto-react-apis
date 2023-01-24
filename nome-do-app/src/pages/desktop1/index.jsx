import React from 'react'
import Header from '../../components/header'
import SectionPokemons from '../../components/sectionPokemons'
import TxtMain from '../../components/txtMain'
import { Body, Main } from './styled'

const Desktop1 = () => {
    return (
        <Body>
            <Header
            />
            <Main>
                <TxtMain />
                <SectionPokemons
                />
            </Main>
        </Body>
    )
}

export default Desktop1
