import { PokemonCardContainer } from "./PokemonCard.styled";

function corFundo(tipoPokemon){
  if(tipoPokemon == 'fogo')
    return '#F44900';
  else if(tipoPokemon == 'agua')
    return '#42827a';
  else if(tipoPokemon == 'raio')
    return '#ffeb14';
}

function PokemonCard(props) {
  return (  
    <PokemonCardContainer color={corFundo(props.tipo)}>
      <span className="pokemon-id">#{props.id}</span>
      <span className="pokemon-nome">{props.nome}</span>
    </PokemonCardContainer>
  )
}

export default PokemonCard;
