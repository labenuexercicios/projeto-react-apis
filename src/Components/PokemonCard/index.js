import { CardFooter, CardImage, CardType, CardBody, CardContainer, CardDetails, Link } from "./style"
import { typeImages } from "../../Images"
import { typeColor } from "../../colors"
import backgroundImg from "../../Assets/Background.svg"
import { useEffect, useState } from "react"
import api from "../../Services/api"
import { usePokemon } from "../../Contexts/pokedexContext"

const PokemonCard = ({ name, mostrarCapturaPokemon, mostrarPokemonExcluido }) => {
  const [pokemon, setPokemon] = useState({})
  const [backgroundColor, setBackgroundColor] = useState(`#ffff`)
  const { addToPokedex, removeToPokedex } = usePokemon()

  useEffect(() => {
    async function ConsumePokeApi() {
      const response = await api.get(`/pokemon/${name}`)

      setPokemon(response.data)

      if (response.data.types[0]) {
        setBackgroundColor(typeColor[response.data.types[0].type.name])
      }
    }

    ConsumePokeApi()
  }, [])

  return pokemon && (
    <CardContainer backgroundColor={backgroundColor}>
      <CardBody>
        <CardDetails>
          <div id="pokemonDetails">
            <p>{`#${pokemon.id}`}</p>
            <h2>{name}</h2>
          </div>
          <CardType>

            {pokemon.types &&
              pokemon.types.map((typeOfPokemon) => (
                <img
                  key={`${pokemon.id}.${typeOfPokemon.type.name}`}
                  src={`${typeImages[typeOfPokemon.type.name]}`}
                  alt="type" />
              ))}
          </CardType>
        </CardDetails>
        <CardImage>
          <img className="pokemon_image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="pokedeximg"></img>
          <img src={backgroundImg} alt="pokedeximg"></img>
        </CardImage>

      </CardBody>
      <CardFooter>
        <Link to={`/details/${name}`}>Detalhes</Link>
        {mostrarCapturaPokemon && (
          <button className="capturar" onClick={()=> addToPokedex(name)}>Capturar!</button>
          
        )}
        {mostrarPokemonExcluido && (
          <button className="excluir" onClick={()=> removeToPokedex(name)}>Excluir!</button>
          
        )}
      </CardFooter>
    </CardContainer>

  )
}

export default PokemonCard