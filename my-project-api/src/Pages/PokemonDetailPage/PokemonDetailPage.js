
import React from "react";

import { Corpo, Status, Number, Name, Poison, Glass, Moves, FirstCard, SecondCard, Itens, Text, Head, Fundo  } from "./pokemonDetailStyle";



export function PokemonDetailPage() {
    
    return (
        <div>
            <Head>
                <h3>Todos os Pokemons</h3>
                <h2>Pokemon</h2>
                <button><p>Excluir da Pokedex</p></button>
            </Head>

            <Fundo>
                <Corpo>

                <FirstCard>
                    <h1>Detalhes</h1>
                </FirstCard>
                    

                <SecondCard>
                    <h1>Detalhes</h1>
                </SecondCard>

                <Number>#01</Number>
                <Name>Bulbasauro</Name>
                <Poison>Poison</Poison>
                <Glass>Glass</Glass>

                

                
                        
                <Status>
                    <div>
                        <h1>Base stats</h1>
                    </div>
                </Status>

                        

                <Moves>
                    <h2>Moves:</h2>
                    <Itens><Text>Razor Wind</Text></Itens>
                    <Itens><Text>Razor Wind</Text></Itens>
                    <Itens><Text>Razor Wind</Text></Itens>
                    <Itens><Text>Razor Wind</Text></Itens>
                </Moves>    
                </Corpo>
            </Fundo>
    
    </div>    

    )
};

