
import React from "react";
import { Header } from "../../Components/Header/Header";
import { Corpo, Status, Number, Name, Poison, Glass, Moves, FirstCard, SecondCard, Itens, Text, Fundo } from "./pokemonDetailStyle";











export function PokemonDetailPage() {

    
    
    

    
        
        return (
            <>
                
    
                <Header/>
                <Fundo>
                    <Corpo>
    
                        <FirstCard >
                            <h1>Detalhes</h1>
                        
                        </FirstCard>
    
                        <SecondCard >
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
    
            </>
    
        )}
        











