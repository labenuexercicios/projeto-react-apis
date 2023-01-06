
import fire from "../../assets/fire.svg"
import grass from "../../assets/grass.svg"
import bug from "../../assets/bug.svg"
import dragon from "../../assets/dragon.svg"
import dark from "../../assets/dark.svg"
import eletric from "../../assets/eletric.svg"
import fairy from "../../assets/fairy.svg"
import fighting from "../../assets/fighting.svg"
import flying from "../../assets/flying.svg"
import ghost from "../../assets/ghost.svg"
import ground from "../../assets/ground.svg"
import ice from "../../assets/ice.svg"
import normal from "../../assets/normal.svg"
import poison from "../../assets/poison.svg"
import psychic from "../../assets/psychic.svg"
import rock from "../../assets/steel.svg"
import steel from "../../assets/steel.svg"
import water from "../../assets/water.svg"
import { MainDetails } from "./styleCardDetails"
import { DetailsPokemon } from "./styleCardDetails"
import { BarStatsDetails,  } from "./styleCardDetails"
import { NameDetails, } from "./styleCardDetails"
import { ImgDetails, } from "./styleCardDetails"
import { CardMoves,  } from "./styleCardDetails"
import { BarStatsColors } from "./styleCardDetails"



function CardDetails(props) {



const colorCard = ()=>{
switch (props.pokemon.types[0].type.name) {
case 'bug':
    return '#316520'
case 'dragon':
    return '#0A6CBF'
case 'dark':
    return '#5C5365'
case 'eletric':
    return '#F4D23B'
case 'fairy':
    return '#EC8FE6'
case 'fighting':
    return '#CE4069'
case 'flying':
    return '#6892B0'
case 'ghost':
    return '#5269AC'
case 'ground':
    return '#D97745'
case 'ice':
    return '#74CEC0'
case 'normal':
    return '#BF9762'
case 'poison':
    return '#AD61AE'
case 'psychic':
    return '#F67176'
case 'rock':
    return '#C7B78B'
case 'steel':
    return '#BBBBBB'
case 'water':
    return '#33A4F5' 
case 'fire': 
    return '#F44900'
case 'grass':
    return '#70B873'
break;
default:
    return '#729F92'
        }
}

return (
<>
<MainDetails
colorCard={colorCard}>
<DetailsPokemon>
    <div>
        <img src={props.pokemon.sprites?.front_default} alt={props.pokemon?.name}/>
    </div>
    <div>
        <img src={props.pokemon.sprites?.back_default} alt={props.pokemon?.name}/>
    </div>
</DetailsPokemon>

<BarStatsDetails>
    <div>
        <h3>Base stats</h3>
        {props.pokemon?.stats?.map((status)=>(
        <p><span>{status.stat.name.replace("hp","HP").replace("special-attack","Sp.Atk").replace("special-defense","Sp.Def ")}</span><span>{status.base_stat}</span><BarStatsColors stats={status.base_stat}><div></div></BarStatsColors></p>
))}
    </div>
    <div>
        <p><span>Total:</span>
            <span>
            {props.pokemon?.stats?.reduce((acc,cur)=> acc + cur.base_stat,0)}
            </span>
        </p>
    </div>
</BarStatsDetails>

<NameDetails>
    <div>
        <h3>{props.pokemon?.id < 10 ? '0' + String(props.pokemon?.id) : props.pokemon?.id}</h3>
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
        <h4>Moves:</h4>
            {props.pokemon?.moves && props.pokemon?.moves.filter((move,i) => i < 4).map((move)=> { return (<CardMoves>{move.move.name}</CardMoves>)})}
    </div>
</NameDetails>

<ImgDetails>
    <img src={props.pokemon?.sprites?.other['official-artwork'].front_default} alt="pokemon"/>
</ImgDetails>

</MainDetails>
}
</>
);
}

export default CardDetails