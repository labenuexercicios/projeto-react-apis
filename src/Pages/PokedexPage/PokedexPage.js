import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexPageContainer } from "./PokedexPage.styled";
import { useEffect, useState } from "react";
import ClickMe from "../../Components/Chakra/ClickMe";
import Header from "../../Components/Header/Header";


function PokedexPage() {

  const [pokemonList, setPokemonList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);
  const [nextPageLink, setNextPageLink] = useState('');

  function nextPage(){
    setPageNumber(pageNumber+1)
  }
  const isButtonDisabled = pageNumber >= pageLimit;

  return (
    <>
    <Header></Header>
      
      <PokedexPageContainer>
      <h1 className="h1-pokedex">Meus Pokémons</h1>
      
      <div className="container-card">
        {
          pokemonList.map((pokemon) => {
            return <PokemonCard
            key={pokemon.name.length + Math.random()}
            id={pokemon.id}
            nome={pokemon.name}
            types={pokemon.types}
            img={pokemon.img}
            />
          })
        }
      </div>

      {/* <ClickMe disabled={isButtonDisabled} onClick={()=> nextPage()} text={'Next'}></ClickMe> */}

    </PokedexPageContainer>
    </>
    
  )
}

export default PokedexPage;
