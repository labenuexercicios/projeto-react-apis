import React from 'react'
import { useContext } from "react";
import Header from '../../components/headers';
import SectionPokemons from '../../components/sectionPokemons';
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerMain, Section } from "./styled"



const HomePage = () => {
    const context = useContext(GlobalContext);
    // console.log(context)
    return (
        <div>
            <Header />
            <ContainerMain>
                <div>
                    <h1>???</h1>
                </div>
                <Section>
                    <SectionPokemons />
                </Section>
            </ContainerMain>
        </div>
    )
}

export default HomePage
