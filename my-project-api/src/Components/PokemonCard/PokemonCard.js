import { Container, Detalhes, Capturar, Titulo, Numero, Poison, Glass, Pokemon } from "./pokemonStyle";


export function PokemonCard({name}) {
    



    return (
        
            <Container>
                <Titulo>{name}</Titulo>
                <Numero>#01</Numero>
                <Glass>Glass</Glass>
                <Poison>Poison</Poison>
                <Detalhes>Detalhes</Detalhes>
                <Pokemon>Imagem</Pokemon>
                <Capturar>Capturar</Capturar>
            </Container>
        
    )
};