import { useNavigate } from "react-router-dom";
import { Container, Detalhes, Titulo, Numero, Poison, Glass, Pokemon } from "./pokemonStyle";
import { goToDetailsPage } from "../../router/Codinator";


export function PokemonCard({name, image, number}) {

    // const context = useContext(GlobalContext);

    

    // const { pokemons } = context;

    const navigate = useNavigate();

    

    // const [pokemon, setPokemon] = useState([]);

    


    



    return (
        
            <Container>
                <Titulo>{name}</Titulo>
                <Numero>{number}</Numero>
                <Glass>Glass</Glass>
                <Poison>Poison</Poison>
                <Pokemon src={image}/>
                <Detalhes onClick={()=>{goToDetailsPage(navigate)}}>Detalhes</Detalhes>
            </Container>
    )
};
        