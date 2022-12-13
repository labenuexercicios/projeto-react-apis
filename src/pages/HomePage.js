import React from "react"
import PokemonCard from "../components/card/PokemonCard"
import Header from "../components/Header"
import styled from 'styled-components'

const HomePageStyled = styled.div`

padding:24px;
background-color:#5D5D5D;
min-height:100vh;
display: flex;
flex-direction:column;


h1{
    color: white;
    font-weight:700;
    font-size: 48px;
    margin-bottom:56px;     
   
}
.divCard{
    display: flex;
    flex-wrap:wrap;
    gap:20px;
  
    
}

`



const HomePage = () => {
    return (
        <>
            <Header isHomePage={true}/>

            <HomePageStyled>
                <h1>Todos os Pokemons</h1>
                <div className="divCard">
                    <PokemonCard />
                    {/* <PokemonCard />
                    <PokemonCard />
                    <PokemonCard /> */}
                </div>
            </HomePageStyled>



        </>
    )
}
export default HomePage