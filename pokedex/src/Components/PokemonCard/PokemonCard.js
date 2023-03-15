import { StyledButton, StyledCard, StyledDetails, StyledImg, StyledName, StyledP, StyledPokebola, StyledTypes } from "./StyledPokemonCard"
import Pokebola from "../../Assets/pokebola.png"
import { images } from "../../Assets/Types/images"
import { colors } from "../../Assets/colors"
import { useNavigate } from "react-router-dom"
import {goToDetailsPage} from "../../Routes/coordinator"


export const PokemonCard = (props) => {

  const navigate = useNavigate()
  //   const [pokemonData, setPokemonData] = useState([]);

  // useEffect(() => {
  //   axios.get(`${props.url}`)
  //     .then((response) => {setPokemonData(response.data)
  //     console.log(response.data)
  //   })
  //     .catch((error) => console.log(error));
  // }, [props.name]);

  return (
    <StyledCard color={colors[props.types[0].type.name]}>
      <StyledP>#{props.id < 10 ? `0${props.id}` : props.id}</StyledP>
      <StyledName>{props.name.charAt(0).toUpperCase()+props.name.slice(1)}</StyledName>
      <StyledTypes>
        {props.types.map((type) => {
          return <img src={images[type.type.name]} />
        })}
      </StyledTypes>

      <StyledDetails onClick={()=>goToDetailsPage(navigate, props.pokemon)}>Detalhes</StyledDetails>
      <StyledImg src={props.sprite} />
      <StyledPokebola src={Pokebola} />
      <StyledButton>Capturar!</StyledButton>
    </StyledCard>

  )
}