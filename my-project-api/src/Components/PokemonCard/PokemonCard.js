import { useNavigate } from "react-router-dom";
import { Container, Detalhes, Capturar, Titulo, Numero, Poison, Glass, Pokemon } from "./pokemonStyle";
import { goToDetailsPage } from "../../router/Codinator";

export function PokemonCard({name}) {

    const navigate = useNavigate();
    



    return (
        
            <Container>
                <Titulo>{name}</Titulo>
                <Numero>#01</Numero>
                <Glass>Glass</Glass>
                <Poison>Poison</Poison>
                <Detalhes onClick={()=>{goToDetailsPage(navigate)}}>Detalhes</Detalhes>
                <Pokemon>Imagem</Pokemon>
                <Capturar>Capturar</Capturar>
            </Container>
        
    )
};