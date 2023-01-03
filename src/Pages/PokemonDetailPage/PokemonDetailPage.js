import { PokemonDetailPageContainer } from "./PokemonDetailPage.styled";
import Header from "../../Components/Header/Header";
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

function PokemonDetailPage(props){

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
          background: '#352d3d'
        },
        'dragon': {
          button: dragon,
          background: '#097286'
        },
        'electric': {
          button: electric,
          background: '#deb504'
        },
        'fairy': {
          button: fairy,
          background: '#d151a1'
        },
        'fighting': {
          button: fighting,
          background: '#7f2841'
        },
        'fire': {
          button: fire,
          background: '#e9904e'
        },
        'flying': {
          button: flying,
          background: '#3b6786'
        },
        'ghost': {
          button: ghost,
          background: '#686f86'
        },
        'grass': {
          button: grass,
          background: '#729F92'
        },
        'ground': {
          button: ground,
          background: '#9e5129'
        },
        'ice': {
          button: ice,
          background: '#539a8f'
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
          background: '#d88083'
        },
        'rock': {
          button: rock,
          background: '#706648'
        },
        'steel': {
          button: steel,
          background: '#817a7a'
        },
        'water': {
          button: water,
          background: '#257bba'
        }
      };
    return (
        <>
        <Header></Header>
        <PokemonDetailPageContainer>
            
            <div className="detail-page">
            <img className="img-pokemon-detail" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png" alt="Pokemon perfil"/>
                <h1 className="h1-detail">Detalhes</h1>
                <div className="green-div-page">
                <img className="pokebol-symbol" width={675} src={pokebolSymbol} alt={props.nome}></img>
                    <div className="div-test">
                        <div className="pokemon-front-back">
                          <div className="img-pokemon-front"></div>
                          <div className="img-pokemon-back"></div>
                        </div>
                        <div className="base-stats-pokemon"></div>
                        <div className="type-moves-pokemon">
                            <div className="name-type-pokemon">
                            <h3 className="pokemon-id">#{props.id}</h3>
                            <h2 className="pokemon-nome">{props.nome}</h2>
                            <div className="div-type">

                                {
                                    props.types &&
                                    props.types.map((tipo) => {
                                    return <img key={props.id + Math.random()} 
                                                className="icon-tipo" 
                                                src={typesButtons[tipo].button} 
                                                alt="img tipo"></img>
                                    })
                                }
                            </div>
                        </div>
                        <div className="moves-pokemon"></div>
                      </div>
                    </div> 
                </div>
            </div>

            
           
        </PokemonDetailPageContainer>
        </>
    )
          
    
       
}
export default PokemonDetailPage;