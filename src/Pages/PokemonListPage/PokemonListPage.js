import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokemonListPageContainer } from "./PokemonListPage.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import ClickMe from "../../Components/Chakra/ClickMe";
import Header from "../../Components/Header/Header";
import { PAGES } from "../../utils";
import CustomModal from "../../Components/Chakra/CustomModal";
import { useDisclosure } from "@chakra-ui/react";




function PokemonListPage(){
    const [pokemonList, setPokemonList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageDirection, setPageDirection] = useState('');
    const [pageLimit, setPageLimit] = useState(1);
    const [nextPageLink, setNextPageLink] = useState('');
    const [previousPageLink,setPreviousPageLink]=useState('');
    const { isOpen: isGotchaOpen, onOpen: onGotchaOpen, onClose: onGotchaClose } = useDisclosure();
    // const { isOpen: isRemoveOpen, onOpen: onRemoveOpen, onClose: onRemoveClose } = useDisclosure();

    function URL(){
        let url = "https://pokeapi.co/api/v2/pokemon";
        if(pageDirection==="next"){
            if(nextPageLink != ""){
                url = nextPageLink
            } 
         
        }
        else if(pageDirection==="previous"){
            if(previousPageLink != ""){
                url = previousPageLink
            }
        }

        return url;
    }

    async function getPokemons (){
        const response = await axios.create({
            baseURL: URL()
      }).get("")
      .then((response)=> {

        setNextPageLink(response.data.next);
        setPreviousPageLink(response.data.previous);
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
        setPageDirection("next")
        setPageNumber(pageNumber+1)
    }
    const isButtonDisabledNext = pageNumber >= pageLimit;

    function previousPage(){

        if(pageNumber>1){
            setPageDirection("previous")
            setPageNumber(pageNumber-1)
        }
        
    }
    const isButtonDisabledPrevious = pageNumber === 1;
  
    return (
      <>
        <Header page={PAGES.POKEMON_LIST_PAGE}></Header>
        <PokemonListPageContainer>
        <h1 className="h1-pokedex-list">Todos os Pokémons</h1>

        <CustomModal 
          isOpen={isGotchaOpen}
          onOpen={onGotchaOpen}
          onClose={onGotchaClose}
          title={'Gotcha!'}
          subtitle={'O Pokémon foi adicionado a sua Pokédex'}
        />

        {/* <CustomModal 
          isOpen={isRemoveOpen}
          onOpen={onRemoveOpen}
          onClose={onRemoveClose}
          title={'REMOVE!'}
          subtitle={'O Pokémon foi adicionado a sua Pokédex'}
        /> */}

        <div className="container-card">
          {
            pokemonList.map((pokemon) => {
              return <PokemonCard
              key={pokemon.name.length + Math.random()}
              pokemon={pokemon}
              openModal={onGotchaOpen}
              closeModal={onGotchaClose}

              />
            })
          }
        </div>
        <div className="page-prev-next">
        <ClickMe disabled={isButtonDisabledPrevious} onClick={()=> previousPage()} text={'Anterior'}></ClickMe>
        <h2>Página {pageNumber} de { pageLimit }</h2>
        <ClickMe disabled={isButtonDisabledNext} onClick={()=> nextPage()} text={'Próximo'}></ClickMe>
  
        </div>
        
        </PokemonListPageContainer>
      </>
    )
}
export default PokemonListPage;