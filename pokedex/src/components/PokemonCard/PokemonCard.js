import { Card, ContainerPokemonCard } from "./pokemonCardStyle"
import water from '../../assets/water.png'

export const PokemonCard = () => {
    return (
        <div>
            <ContainerPokemonCard>
                <Card>
                    <div>

                        <p>1</p>
                        <h2>Pikachu</h2>
                        <div className="type">
                        <img src={water} className="info"/>
                        <p>Elétrico</p>
                        </div>
                        <a href="#">Detalhes</a>

                    </div>

                    <div className="img">
                        <img src="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2023/02/pikachu-capitao-destacada.jpg?fit=1340%2C846&ssl=1" />
                        <button>Capturar!</button>
                    </div>
                    
                </Card>
                
                
            </ContainerPokemonCard>
        </div>
    )
}