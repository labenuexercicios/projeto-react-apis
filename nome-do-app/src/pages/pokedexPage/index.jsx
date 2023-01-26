import React from 'react'
import Header from '../../components/headers'
import SectionPokedex from '../../components/sectionPokedex'
import SectionPokemons from '../../components/sectionPokemons'
import { ContainerMain, Section } from '../home/styled'

const PokedexPage = () => {
    return (
        <div>
            <Header />
            <ContainerMain>
                <div>
                    <h1>???</h1>
                </div>
                <Section>
                    <SectionPokedex />
                </Section>
            </ContainerMain>
        </div>
    )
}

export default PokedexPage
