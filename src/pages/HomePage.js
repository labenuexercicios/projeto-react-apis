import React from "react"
import PokemonCard from "../components/card/PokemonCard"
import Header from "../components/Header"
import styled from 'styled-components'


 import { useContext } from "react"
 import { GlobalContext } from "../contexts/GlobalContext"

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

    const context = useContext(GlobalContext)

    const  {pokelist, addToPokedex,pokedex} = context
    //console.log(pokelist)

   
   
  
    // não mostrar pokemons que estão na pokedex
    // const filteredPokelist = () =>
    //   pokelist.filter(
    //     (pokemonInList) =>
    //       !pokedex.find(
    //         (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
    //       )
    //   );
    // console.log(pokelist)

    return (
        <>
            <Header isHomePage={true} />

            <HomePageStyled>
                <h1>Todos os Pokemons</h1>
                <div>
                {pokelist && pokelist.map((item) => {
              return (<div key={item.name}>                
                <PokemonCard pokemon={item}/>
              </div>)
            })
            }

                </div>



                {/* <Container>
          <h1>Todos Pokémons</h1>
          <div>
            {pokemonData && pokemonData.map((item) => {
              return (<div key={item.name}>
                <CardHome url={item.url}/>
              </div>)
            })
            }
          </div>
        </Container> */}





                {/* {pokelist.map((pokemon)=>{
                     console.log("outro", pokemon)
                    return(
                        <PokemonCard
                        key = {pokemon.id}
                        pokemon ={pokemon}                       
                       >                       

                       </PokemonCard>
                    )                  
                }
                )} */}
                
                {/* {filteredPokelist().map((pokemon) => (
                    <PokemonCard
                    key={pokemon.url}
                    pokemonUrl={pokemon.url}
                    addToPokedex={addToPokedex}
                    />
                ))} */}

                
                {/* <div className="divCard">
                    <PokemonCard /> */}
                    {/* <PokemonCard />
                    <PokemonCard />
                    <PokemonCard /> */}
                {/* </div> */}
            </HomePageStyled>

        </>
    )
}
export default HomePage