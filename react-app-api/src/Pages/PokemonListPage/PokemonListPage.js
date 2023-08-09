import React, { useContext } from "react";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { Header } from "../../Components/Header/Header";
import { DivComponents, Texto } from "./pokemonListPageStyle";
import { Alert } from "../../Components/Alert/Alert";
import { GlobalContext } from "../../GlobalState/GlobalContext";

export function ListPage() {
  const context = useContext(GlobalContext)

  const { gotcha } = context
  
  return (
    <>
    {gotcha && <Alert 
    main = {"Gotcha!"}
    text = {"O pokémon foi adicionado a sua Pokédex"}/>}
      <Header />
      <DivComponents>
        <PokemonCard />
      </DivComponents>
    </>
  );
}