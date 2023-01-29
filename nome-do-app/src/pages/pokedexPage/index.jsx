import React from 'react'
import Header from '../../components/headers'
import SectionPokedex from '../../components/sectionPokedex'
import SectionPokemons from '../../components/sectionPokemons'
import TxtMain from '../../components/TxtMaIn'
import { ContainerMain, Section } from '../home/styled'

const PokedexPage = () => {
    return (
        <div>
            <Header />
            <ContainerMain>
                <TxtMain texto = {`Meus Pokemons`}/>
                <Section>
                    <SectionPokedex />
                </Section>
            </ContainerMain>
        </div>
    )
}

export default PokedexPage
