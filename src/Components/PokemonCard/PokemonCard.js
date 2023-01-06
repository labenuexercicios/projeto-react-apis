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
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { PAGES, getPokedexFromStorage, updatePokedex, capitalize } from "../../utils";




function PokemonCard(props) {

  const location = useLocation();
  const { 
    pokemon, 
    setIsDeleted, 
    openModal, 
    closeModal,
    openModal2, 
    closeModal2,
  } = props

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
  
  const navigate = useNavigate()

  const goToDetail = (id) => {
    navigate(`/pokemonDetalhes/${id}`)
  }

  function capturar(pokemon){
    if(!isDuplicated(pokemon)){
      let pokedex = getPokedexFromStorage();
      pokedex.push(pokemon);
      updatePokedex(pokedex);
      openModal();
      setTimeout(()=>{
        closeModal()
      },2000)
    }
  }

  function remove(pokemon){
    let pokedex = getPokedexFromStorage().filter((p) => p.name !== pokemon.name);
    updatePokedex(pokedex);
    setIsDeleted(true);
    openModal2();
      setTimeout(()=>{
        closeModal2()
      },2000)
  }

  const isDuplicated = (pokemon)=>{
    let pokedex = getPokedexFromStorage();
    return pokedex.filter((value)=> value.name === pokemon.name).length > 0
  }

  return (
    <PokemonCardContainer  color={corFundo(pokemon.types)}>
      <div className="div-card-externo">

        <img className="pokemon-img" width={170} src={pokemon.img} alt={pokemon.nome}></img>
        
        <div className="div-card-interno">
          <img className="pokebol-symbol" width={193} src={pokebolSymbol} alt={pokemon.nome}></img>
          <div className="descricao">
            <h3 className="pokemon-id">#{pokemon.id}</h3>
            <h2 className="pokemon-nome">{capitalize(pokemon.name)}</h2>
            <div className="div-type">

              {
                pokemon.types &&
                pokemon.types.map((tipo) => {
                  return <img key={pokemon.id + Math.random()} className="icon-tipo" src={typesButtons[tipo].button} alt="img tipo"></img>
                })
              }

            </div>
          </div>
          <div className="div-botoes">
            <button onClick={()=>{ goToDetail(pokemon.id) }} className="btn-detalhes">Detalhes</button>
            <div>
            {
              location.pathname === PAGES.POKEMON_LIST_PAGE ?
              <button onClick={()=> capturar(pokemon)} className="btn-capturar">Capturar</button>
                : 
              <button onClick={()=> remove(pokemon)} className="btn-excluir">Excluir</button>
            }
            </div>
          </div>
        </div>
      </div>
     
    </PokemonCardContainer>
  )
}

export default PokemonCard;
