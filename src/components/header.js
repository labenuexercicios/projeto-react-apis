import React ,{ useContext} from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import imgPokemon from "../assets/img/pokemon.png"
import { vaiParaHome, vaiParaPokedex } from "../coordinator/coordinator"
import { Container } from "./header.styled"
import { Button } from '@chakra-ui/react';
import Modal from 'react-modal' ;
import { GlobalContext } from "../context/GlobalContext";
import { CardModal } from "./header.styled"





export function Header(props) {

    const navigate = useNavigate()

    const location = useLocation()

    const params = useParams()



    const excluirPokemom = (pokemon) => {
        const filtroExcluir = props.addPoke.filter(
            (poke) => poke.id !== pokemon.id)
        const virarString = JSON.stringify(filtroExcluir)
        localStorage.setItem("pokemon", virarString)
        props.setAddPoke(filtroExcluir)
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: '20%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: "1",
          borderRadius: "8px",
         zIndex: "2",
         

        },
    };

    Modal.setAppElement('#root')

    const context = useContext(GlobalContext)

    const { modalIsOpen, setIsOpen } = context

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const excluirMaisModal = (pokemon) => {
        excluirPokemom(pokemon)
        openModal()
    }


    return (

        <>
           <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
           >
           
            <CardModal>
            <h1><b>Oh, no!</b></h1>
            <p><b>O Pokémon foi removido da sua Pokédex</b></p>
            </CardModal>
          </Modal>

            <Container>
                {location.pathname === "/" &&
                    <div>
                        <img className="containerImgHome" src={imgPokemon} />
                        <button className="containerButtonHome" onClick={() => vaiParaPokedex(navigate)}>Pokédex</button>
                    </div>
                }

                {location.pathname === "/pokedex" &&
                    <div>
                        <button className="BotaoHomePokedex" onClick={() => vaiParaHome(navigate)}><b>{"<"} Todos Pokémons</b></button>
                        <img className="containerImgPokedex" src={imgPokemon} />
                    </div>
                }

                {location.pathname === `/detalhes/${params.pokemon}` &&
                    <div className="CardDetalhes">
                        <button className="BotaoHomeDetalhes" onClick={() => vaiParaHome(navigate)}><b>{"<"} Todos Pokémons</b></button>
                        <img className="containerImgDetalhes" src={imgPokemon} />
                        <Button className="BotaoExcluirDetalhes" onClick={() => excluirMaisModal(props.pokemon)}>Excluir da Pokédex</Button>

                    </div>

                }
            </Container>
        </>
    )
}