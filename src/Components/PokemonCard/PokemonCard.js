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



function PokemonCard(props) {

  function corFundo(types){
    if(types){
      let tipoPokemon = types[0]
      return typesButtons[tipoPokemon].background;
    }
  }

  const typesButtons = {
    'bug': {
      button: bug,
      background: '#437d4a'
    },
    'dark': {
      button: dark,
      background: ''
    },
    'dragon': {
      button: dragon,
      background: ''
    },
    'electric': {
      button: electric,
      background: '#ffeb14'
    },
    'fairy': {
      button: fairy,
      background: ''
    },
    'fighting': {
      button: fighting,
      background: ''
    },
    'fire': {
      button: fire,
      background: '#EAAB7D'
    },
    'flying': {
      button: flying,
      background: ''
    },
    'ghost': {
      button: ghost,
      background: ''
    },
    'grass': {
      button: grass,
      background: '#729F92'
    },
    'ground': {
      button: ground,
      background: ''
    },
    'ice': {
      button: ice,
      background: ''
    },
    'normal': {
      button: normal,
      background: '#BF9762'
    },
    'poison': {
      button: poison,
      background: '#6d376e'
    },
    'psychic': {
      button: psychic,
      background: ''
    },
    'rock': {
      button: rock,
      background: ''
    },
    'steel': {
      button: steel,
      background: ''
    },
    'water': {
      button: water,
      background: '#33A4F5'
    }
  };
  
  return (
    <PokemonCardContainer  color={corFundo(props.types)}>
      <div className="div-card-externo">

        <img className="pokemon-img" width={170} src={props.img} alt={props.nome}></img>
        
        <div className="div-card-interno">
          <img className="pokebol-symbol" width={193} src={pokebolSymbol} alt={props.nome}></img>
          <div className="descricao">
            <h3 className="pokemon-id">#{props.id}</h3>
            <h2 className="pokemon-nome">{props.nome}</h2>
            <div className="div-type">

              {
                props.types &&
                props.types.map((tipo) => {
                  return <img key={props.id + Math.random()} className="icon-tipo" src={typesButtons[tipo].button} alt="img tipo"></img>
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
