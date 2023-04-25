import { ContainerPokemonCard } from "./pokemonCardStyle"

export const PokemonCard = () => {
    return (
        <div>
            <ContainerPokemonCard>
                <div>
                    <img src="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2023/02/pikachu-capitao-destacada.jpg?fit=1340%2C846&ssl=1" />
                    <h2>Pikachu</h2>
                    <p>Elétrico</p>
                    <button>Detalhes</button>
                    <button>Adicionar à Pokédex</button>

                </div>
                
                
            </ContainerPokemonCard>
        </div>
    )
}