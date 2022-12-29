import { PokemonCardContainer } from "./PokemonCard.styled";
// import  poison from "../../assets/img/iconsHabilidades"
// import grass from "../../assets/img/iconsHabilidades/grass.svg"
import poison from "../../assets/img/iconsHabilidades/poison.png"
import grass from "../../assets/img/iconsHabilidades/grass.svg"
import bug  from "../../assets/img/iconsHabilidades/bug.png"
import water  from "../../assets/img/iconsHabilidades/water.png"
import flying  from "../../assets/img/iconsHabilidades/flying.png"
import fire  from "../../assets/img/iconsHabilidades/fire.png"
import normal  from "../../assets/img/iconsHabilidades/normal.png"


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
    'poison' : poison, 
    'grass' : grass, 
    'bug' : bug, 
    'water' : water, 
    'flying' : flying, 
    'fire' : fire, 
    'normal' : normal
  };
  
  return (
    <PokemonCardContainer  color={corFundo(props.tipo)}>
      <div className="div-card-externo">
        <div className="div-card-interno">
          <h3 className="pokemon-id">#{props.id}</h3>
          <h2 className="pokemon-nome">{props.nome}</h2>
          <div className="div-type">

            {
              props.types &&
              props.types.map((tipo) => {
              return <div key={ Math.random()}>
                        <img className="icon-tipo" src={typesButtons[tipo]} alt="img tipo"></img>
                    </div>
              })
            }
            {/* <img className="icon-tipo" src={typesButtons[props.tipo]} alt="img tipo"></img> */}
            {/* <img className="icon-habilidade" src={props.habilidade} alt="img hanbilidade"></img> */}
          </div>
          <div className="div-detalhes-capturar">
            <button className="btn-detalhes">Detalhes</button>
            <button className="btn-capturar">Capturar!</button>
          </div>
        </div>
      </div>
     
    </PokemonCardContainer>
  )
}

export default PokemonCard;
