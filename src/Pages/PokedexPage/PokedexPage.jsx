import { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PageContainer, PokedexContainer } from "../PokedexPage/PokedexStyle";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { Modal } from "../../Components/Modal/Modal";


export const PokedexPage = () => {

    const context = useContext(GlobalContext);
    const { pokedex, setOpenModal, openModal, isFunctionCatch, setIsFunctionCatch } = context;


    return(
        <PageContainer>
            <Modal
                openModal={openModal}
                setOpenModal={() => setOpenModal(!openModal)}
                isFunctionCatch={isFunctionCatch}
            />
            <PokedexContainer>
                {pokedex.map((pokemon, index)=>{
                    return(
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            setOpenModal={setOpenModal}
                            setIsFunctionCatch={setIsFunctionCatch}
                        />
                    )
                })}
            </PokedexContainer>
        </PageContainer>
    )
}

export default PokedexPage