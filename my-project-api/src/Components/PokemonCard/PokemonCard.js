import { useNavigate } from "react-router-dom";
import { Container, Detalhes, Capturar, Titulo, Numero, Poison, Glass, Pokemon } from "./pokemonStyle";
import { goToDetailsPage } from "../../router/Codinator";

export function PokemonCard({name, image, number}) {

    const navigate = useNavigate();
    



    return (
        
            <Container>
                <Titulo>{name}</Titulo>
                <Numero>{number}</Numero>
                <Glass>Glass</Glass>
                <Poison>Poison</Poison>
                <Detalhes onClick={()=>{goToDetailsPage(navigate)}}>Detalhes</Detalhes>
                <Pokemon src="{image}"></Pokemon>
                <Capturar>Capturar</Capturar>
            </Container>
        
    )
};