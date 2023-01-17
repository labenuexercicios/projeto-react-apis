import pokedex from "../../assets/pokedex.svg"
import { useContext } from "react";
import { MainHeader } from "./styleHeader"
import { AddPokedex } from "./styleHeader"
import { ButtonDeletePokemon} from "./styleHeader"
import { AddPokemon } from "./styleHeader"
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { goToPokedex, goToHome } from "../../routes/coordinator";
import { GlobalContext } from "../../context/GlobalContext";

function Header() {

const navigate = useNavigate()
const location = useLocation()
const context = useContext(GlobalContext)
const params = useParams()
const pokeName = params.PokemonName
const thisPokemon = context.detailPokemon.find(pokemon => pokemon.name === pokeName)
const isInPokedex = context.pokedex.find(pokemon => pokemon.name === pokeName)

const searchPokedex = ()=>{
switch (location.pathname) {
case "/":
  return <></> 
case `/${pokeName}`:
  return(
<>
{isInPokedex?
<ButtonDeletePokemon onClick={()=>{context.removePokemonPokedex(thisPokemon)}}>Remover da Pokedex</ButtonDeletePokemon>:<AddPokemon onClick={()=>{context.addPokemonPokedex(thisPokemon)}}>Capturar</AddPokemon>}
</>
)  
default:
  return <></>;
}
}
return (
<>
<MainHeader>
  <div>
{location.pathname === "/"?'':<a onClick={(()=>goToHome(navigate))}>Todos os Pokemons</a>}
  </div>
<div><img src={pokedex} alt="pokedex"/></div>
{location.pathname === `/${pokeName}` ?
<div>
{searchPokedex()}
  </div>
:
<div>
{location.pathname === "/" ?
<AddPokedex onClick={()=>goToPokedex(navigate)}>Pokedex</AddPokedex>:''}
  </div>}
</MainHeader>
</>
)
}
  
  export default Header