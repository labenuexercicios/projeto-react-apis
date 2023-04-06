import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {MainCardDetails, DisplayPokemon, DisplayBaseStats, DisplayNameMove, DisplaySpritePokemon, DisplayMoves, BarStats} from "./CardDetailsStyled"
import bug from "../../icons/bug.svg";
import dark from "../../icons/dark.svg";
import dragon from "../../icons/dragon.svg";
import eletric from "../../icons/eletric.svg";
import fairy from "../../icons/fairy.svg";
import fighting from "../../icons/fighting.svg";
import fire from "../../icons/fire.svg";
import flying from "../../icons/flying.svg";
import ghost from "../../icons/ghost.svg";
import grass from "../../icons/grass.svg";
import ground from "../../icons/ground.svg";
import ice from "../../icons/ice.svg";
import normal from "../../icons/normal.svg";
import poison from "../../icons/poison.svg";
import psychic from "../../icons/psychic.svg";
import rock from "../../icons/rock.svg";
import steel from "../../icons/steel.svg";
import water from "../../icons/water.svg";

function CardDetails(props) {

    const context = useContext(GlobalContext)

    const colorCard = ()=>{
        switch (props.pokemon.types[0].type.name) {
            case 'grass':
            return '#729F92' //ok             
            case 'fire': 
            return '#EAAB7D' //ok           
            case 'water':
            return '#71C3FF' //ok              
            case 'poison':
            return '#AD61AE'    
            case 'flying':
            return '#6892B0'   
            case 'bug':
            return '#76A866' //ok  
            case 'normal':
            return '#BF9762'   
            case 'dark':
            return '#5C5365'   
            case 'dragon':
            return '#0A6CBF'   
            case 'eletric':
            return '#F4D23B'    
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'              
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'   
            case 'eletric':
            return '#F4D23B'                         
            default:
            return '#729F92'
        }
    }
    
    return (
      <>
    <MainCardDetails
      colorCard={colorCard}>
        <DisplayPokemon>
            <div>
                <img src={props.pokemon.sprites?.front_default} alt={props.pokemon?.name}/>
            </div>
            <div>
                <img src={props.pokemon.sprites?.back_default} alt={props.pokemon?.name}/>
            </div>

        </DisplayPokemon>

        <DisplayBaseStats>
            <div>
            <h2>Base stats</h2>

            {props.pokemon?.stats?.map((status)=>(
                <p><span>{status.stat.name.replace("hp","HP").replace("special-attack","Sp.Atk").replace("special-defense","Sp.Def ")}</span><span>{status.base_stat}</span><BarStats stats={status.base_stat}><div></div></BarStats></p>
            ))}
            </div>
            <div>
                <p><span>Total:</span>
                <span>
                    {props.pokemon?.stats?.reduce((acc,cur)=> acc + cur.base_stat,0)}
                </span>
                <span></span>
                </p>
            </div>
        </DisplayBaseStats>

        <DisplayNameMove>
            <div>
                <h3>#{props.pokemon?.id < 10 ? '0' + String(props.pokemon?.id) : props.pokemon?.id}</h3>
                <h1>{props.pokemon?.name}</h1>
                <p>{props.pokemon?.types?.map((type)=> {
                            switch (type.type.name) {
                                case 'grass':
                                    return <img src={grass} alt={type.type.name}/>
                                    case 'fire': 
                                    return <img src={fire} alt={type.type.name}/>
                                    case 'water':
                                    return <img src={water} alt={type.type.name}/>
                                    case 'poison':
                                    return <img src={poison} alt={type.type.name}/>  
                                    case 'flying':
                                    return <img src={flying} alt={type.type.name}/>  
                                    case 'bug':
                                    return <img src={bug} alt={type.type.name}/>
                                    case 'normal':
                                    return <img src={normal} alt={type.type.name}/>   
                                    case 'dark':
                                    return <img src={dark} alt={type.type.name}/>   
                                    case 'dragon':
                                    return <img src={dragon} alt={type.type.name}/>   
                                    case 'eletric':
                                    return <img src={eletric} alt={type.type.name}/>  
                                    case 'fairy':
                                    return <img src={fairy} alt={type.type.name}/>  
                                    case 'fighting':
                                    return <img src={fighting} alt={type.type.name}/>   
                                    case 'ghost':
                                    return <img src={ghost} alt={type.type.name}/>   
                                    case 'ground':
                                    return <img src={ground} alt={type.type.name}/>              
                                    case 'ice':
                                    return <img src={ice} alt={type.type.name}/>   
                                    case 'psychic':
                                    return <img src={psychic} alt={type.type.name}/>   
                                    case 'rock':
                                    return <img src={rock} alt={type.type.name}/>   
                                    case 'steel':
                                    return <img src={steel} alt={type.type.name}/>                           
                                    default:
                                    return <img src={""} alt={type.type.name}/>
                            }
                         
                         }
                         )}
                         </p>
            </div>
            <div>
                    <h2>Moves:</h2>
                    {props.pokemon?.moves && props.pokemon?.moves.filter((move,i) => i < 4).map((move)=> { return (<DisplayMoves>{move.move.name}</DisplayMoves>)})}
            </div>
        </DisplayNameMove>

        <DisplaySpritePokemon>
            <img src={props.pokemon?.sprites?.other['official-artwork'].front_default} alt="pokemon"/>
        </DisplaySpritePokemon>
      </MainCardDetails>
                
      </>
    );
  }
  
  export default CardDetails