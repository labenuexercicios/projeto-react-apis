import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GetPokemon } from "../../constants/getPokemon";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardsContainer, Container, P } from "./styled";
import PokemonDetailedCard from "../../components/PokemonDetailedModal/pokemonDetailed";
import Modal from "../../components/Modal/Modal";
import React from "react";

function DetailsPage  ()  {
const { name } = useParams();
const context = useContext(GlobalContext);
const { pokemonDetailed, setPokemonDetailed,openModal, setOpenModal,pokemonExistsInPokedex, verifyPokemon} = context


useEffect(() => {
      GetPokemon(name)
    .then(pokemonDetailed => {setPokemonDetailed(pokemonDetailed)})
    .catch(e => alert(e.reponse.data.message))
  }, []);

return(
        <>
      
        <Container> 
      

        <P>
     <h1>Detalhes</h1>
      </P>
       {  !pokemonExistsInPokedex  ? ( 
         <Modal isOpen={openModal}  setIsClose={() => setOpenModal(!openModal)}> 
         <h1> Gotcha!</h1>
         <p>O Pokémon foi adicionado a sua Pokédex</p>
         </Modal>
            ):
            <Modal isOpen={openModal}  setIsClose={() => setOpenModal(!openModal)}> 
             <h1>  Oh, no!</h1>
      <p>O Pokémon foi removido da sua Pokedéx</p>
            </Modal>}
      <CardsContainer>
      <PokemonDetailedCard 
      key={pokemonDetailed.name}
             pokemonDetailed={pokemonDetailed}
            setOpenModal={setOpenModal}>
      </PokemonDetailedCard>
      </CardsContainer>

          </Container>
        </>
);
}
export default DetailsPage