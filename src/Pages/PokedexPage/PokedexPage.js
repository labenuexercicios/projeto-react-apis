import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexPageContainer } from "./PokedexPage.styled";
import poison from "../../assets/img/iconsHabilidades/poison.png"
import grass from "../../assets/img/iconsHabilidades/grass.svg"
import bug from "../../assets/img/iconsHabilidades/bug.png"
import water from "../../assets/img/iconsHabilidades/water.png"
import flying from "../../assets/img/iconsHabilidades/flying.png"
import fire from "../../assets/img/iconsHabilidades/fire.png"
import normal from "../../assets/img/iconsHabilidades/normal.png"
import { baseTheme } from "@chakra-ui/react";
import pokemons from "../../assets/pokemons.json"
import { useEffect, useState } from "react";
import axios from "axios";
import ClickMe from "../../Components/Chakra/ClickMe";

function PokedexPage() {

  const [pokemonList, setPokemonList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);
  const [nextPageLink, setNextPageLink] = useState('');

  async function getPokemons (){
    const response = await axios.create({
      baseURL: nextPageLink !=''? nextPageLink:"https://pokeapi.co/api/v2/pokemon"
    }).get("")
    .then((response)=> {
      setNextPageLink(response.data.next);
      setPageLimit(Math.floor(response.data.count/20));
      setPokemonList(response.data.results);
      return response;
    })
    .catch((error)=>{
      console.log(error)
    })

    let promises = [];
    let pokemons = [];

    response.data.results.forEach(pokemon => {
      promises.push( 

        axios.create({
          baseURL: "https://pokeapi.co/api/v2/"
        }).get(`pokemon/${pokemon.name}`)
        .then((resposta)=> {
          let tipos = [...resposta.data.types];
          const pokemonDetalhado = {
            name: pokemon.name,
            img: resposta.data.sprites.other['official-artwork'].front_default,
            id: resposta.data.id,
            types: tipos.map((value,index)=> value.type.name),
            stats: resposta.data.stats,
            moves: resposta.data.moves
          }
          pokemons.push(pokemonDetalhado);
        })
        .catch((error)=>{
          console.log(error)
        })

      );
    });

    Promise.all(promises).then(()=>{
      setPokemonList(pokemons);
    })
  }
  
  useEffect(()=>{ getPokemons();}, [pageNumber]);

  function nextPage(){
    setPageNumber(pageNumber+1)
  }
  const isButtonDisabled = pageNumber >= pageLimit;

  return (
    <PokedexPageContainer>
      <h1>Meus Pokémons - Página {pageNumber} de { pageLimit }</h1>
      
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

      <ClickMe disabled={isButtonDisabled} onClick={()=> nextPage()} text={'Next'}></ClickMe>

    </PokedexPageContainer>
  )
}

export default PokedexPage;
