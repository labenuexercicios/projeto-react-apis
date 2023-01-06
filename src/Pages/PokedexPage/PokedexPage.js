import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexPageContainer } from "./PokedexPage.styled";
import { useEffect, useState } from "react";
import ClickMe from "../../Components/Chakra/ClickMe";
import Header from "../../Components/Header/Header";
import { getPokedexFromStorage, PAGES } from "../../utils";
import CustomModal from "../../Components/Chakra/CustomModal";
import { useDisclosure } from "@chakra-ui/react";


function PokedexPage() {

  const [pokemonList, setPokemonList] = useState(getPokedexFromStorage());
  const [isDeleted, setIsDeleted] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);
  const [nextPageLink, setNextPageLink] = useState('');
  const { isOpen: isRemoveOpen, onOpen: onRemoveOpen, onClose: onRemoveClose } = useDisclosure();

  function nextPage(){
    setPageNumber(pageNumber+1)
  }
  const isButtonDisabled = pageNumber >= pageLimit;

  useEffect(()=>{
    setPokemonList(getPokedexFromStorage());
    setIsDeleted(false);
  },[isDeleted]);

  return (
    <>
    <Header page={PAGES.POKEDEX}></Header>
      
      <PokedexPageContainer>

      <CustomModal 
          isOpen={isRemoveOpen}
          onOpen={onRemoveOpen}
          onClose={onRemoveClose}
          title={'Oh, no!'}
          subtitle={'O Pokémon foi removido da sua Pokédex'}
        />
      <h1 className="h1-pokedex">Meus Pokémons</h1>
      
      <div className="container-card">
        {
          pokemonList.map((pokemon) => {
            return <PokemonCard
            key={pokemon.name.length + Math.random()}
            pokemon={pokemon}
            setIsDeleted={setIsDeleted}
            openModal2={onRemoveOpen}
            closeModal2={onRemoveClose}
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
