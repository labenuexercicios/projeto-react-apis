import React from 'react'
import { useContext } from "react";
import Header from '../../components/headers';
import SectionPokemons from '../../components/sectionPokemons';
import TxtMain from '../../components/TxtMaIn';
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerMain, Section } from "./styled"



const HomePage = () => {
    const context = useContext(GlobalContext);
    // console.log(context)
    return (
        <div>
            <Header />
            <ContainerMain>
                <TxtMain texto = {`Todos os Pokemons`}/>
                <Section>
                    <SectionPokemons />
                </Section>
            </ContainerMain>
        </div>
    )
}

export default HomePage
