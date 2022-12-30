import { PokemonCardContainer } from "./PokemonCard.styled";
import bug  from "../../assets/img/iconsHabilidades/bug.png"
import dark  from "../../assets/img/iconsHabilidades/dark.png"
import dragon  from "../../assets/img/iconsHabilidades/dragon.png"
import electric  from "../../assets/img/iconsHabilidades/electric.png"
import fairy  from "../../assets/img/iconsHabilidades/fairy.png"
import fighting  from "../../assets/img/iconsHabilidades/fighting.png"
import fire  from "../../assets/img/iconsHabilidades/fire.png"
import flying  from "../../assets/img/iconsHabilidades/flying.png"
import ghost  from "../../assets/img/iconsHabilidades/ghost.png"
import grass from "../../assets/img/iconsHabilidades/grass.svg"
import ground from "../../assets/img/iconsHabilidades/ground.png"
import ice from "../../assets/img/iconsHabilidades/ice.png"
import normal  from "../../assets/img/iconsHabilidades/normal.png"
import poison from "../../assets/img/iconsHabilidades/poison.png"
import psychic from "../../assets/img/iconsHabilidades/psychic.png"
import rock  from "../../assets/img/iconsHabilidades/rock.png"
import steel  from "../../assets/img/iconsHabilidades/steel.png"
import water  from "../../assets/img/iconsHabilidades/water.png"
import pokebolSymbol  from "../../assets/img/cardDesign/simbolpokemoncard.png"



function corFundo(tipoPokemon){
  if(tipoPokemon === 'fire')
    return '#EAAB7D';
  else if(tipoPokemon === 'water')
    return '#33A4F5';
  else if(tipoPokemon === 'raio')
    return '#ffeb14';
  else if(tipoPokemon === 'bug')
    return '#316520';
  else if(tipoPokemon === 'normal')
    return '#BF9762';
  else if(tipoPokemon === 'poison')
    return '#729F92';
}

function PokemonCard(props) {

  const typesButtons = {
    'bug': bug,
    'dark': dark,
    'dragon': dragon,
    'electric': electric,
    'fairy': fairy,
    'fighting': fighting,
    'fire': fire,
    'flying': flying,
    'ghost': ghost,
    'grass': grass,
    'ground': ground,
    'ice': ice,
    'normal': normal,
    'poison': poison,
    'psychic': psychic,
    'rock': rock,
    'steel': steel,
    'water': water
  };
  
  return (
    <PokemonCardContainer  color={corFundo(props.tipo)}>
      <div className="div-card-externo">

        <img className="icon-tipo" width={193} src={props.img} alt={props.nome}></img>
        
        <div className="div-card-interno">
          <img className="pokebol-symbol" width={193} src={pokebolSymbol} alt={props.nome}></img>
          <div className="descricao">
            <h3 className="pokemon-id">#{props.id}</h3>
            <h2 className="pokemon-nome">{props.nome}</h2>
            <div className="div-type">

              {
                props.types &&
                props.types.map((tipo) => {
                  return <img key={props.id + Math.random()} className="icon-tipo" src={typesButtons[tipo]} alt="img tipo"></img>
                })
              }

            </div>
          </div>
          <div className="div-botoes">
            <button className="btn-detalhes">Detalhes</button>
            <button className="btn-capturar">Capturar!</button>
          </div>
        </div>
      </div>
     
    </PokemonCardContainer>
  )
}

export default PokemonCard;
