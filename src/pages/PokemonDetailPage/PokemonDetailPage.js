
import HeaderDetails from "../../components/HeaderDetails/HeaderDetails"
import { HomeDetails, CardDetails, InfosPokemon } from './style';
import PokemonCard from '../../components/PokemonCard/pokemonCard';


const PageDetails = () => {



  return (
    <div>
      <HeaderDetails />
      <PokemonCard />

      <HomeDetails className='home-details'>
        <h1 className='title'>Detalhes</h1>

        <CardDetails className='container-card-details' >
          <div className='foto-front' >
            imagem frente
            
          </div>
          <div className='base-stats'>

            dados status 
                      
          </div>
          <InfosPokemon className='infos-pokemon' > 
          dados pokemon
          </InfosPokemon>
          <div className='foto-back'>imagem costas </div>
          <div className='moves'>aaa </div>
          <div className='image-poke'>d</div>
        </CardDetails>
        

      </HomeDetails>
    </div>
  )
}

export default PageDetails; 