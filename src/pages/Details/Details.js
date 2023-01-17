import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import CardDetails from "../../components/CardDetails/CardDetails"
import Header from "../../components/Header/Header";
import pokeball from "../../assets/pokeball.gif"
import { MainContainer } from "../stylePages";
import { Cards } from "../stylePages";

function Details() {

const context = useContext(GlobalContext)
const params = useParams()
const pokeName = params.PokemonName

return (
<> 
<Header/>
<MainContainer>
  <div><h1>Detalhes</h1>
    </div>
<Cards>
{context.isLoading ? <img src={pokeball} alt="Loading"/>:context.detailPokemon.filter((pokemon)=> pokemon.name === pokeName).map((pokemon)=>(
<CardDetails
key={pokemon.id}
pokemon={pokemon}/>
)
)
} 
</Cards>  
  </MainContainer>
  </>
);
}

export default Details