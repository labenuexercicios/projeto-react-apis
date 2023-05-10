import { Card, ContainerPokemonCard } from "./pokemonCardStyle"
import water from '../../assets/water.png'

export const PokemonCard = ({name, image}) => {
    return (
        <div>
            <ContainerPokemonCard>
                <Card>
                    <div>

                        <p>1</p>
                        <h2>{name}</h2>
                        <div className="type">
                        <img src={water} className="info"/>
                        <p>Elétrico</p>
                        </div>
                        <a href="#">Detalhes</a>

                    </div>

                    <div className="img">
                        <img src={image} />
                        <button>Capturar!</button>
                    </div>
                    
                </Card>
                
                
            </ContainerPokemonCard>
        </div>
    )
}