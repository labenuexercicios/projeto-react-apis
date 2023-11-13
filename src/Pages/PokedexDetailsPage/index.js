import Header from "../../Components/Header"
import { Card1, Card2, CardContainerDetails, CardPokemomImagem, CardStats, CardMoves, CardContainerPokemom } from "./style"
import { Div, CardImage, CardType, CardBody, CardDetails } from "./style"
import { typeImages } from "../../Images"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import api from "../../Services/api"
import { typeColor } from "../../colors"
import { BarraProgresso } from "../../Components/BarraProgresso"


const PokedexDetailsPage = () => {
  const { name } = useParams()
  const [backgroundColor, setBackgroundColor] = useState(`#ffff`)
  const [stats, setStats] = useState([])
  const [moves, setMoves] = useState([])

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    async function ConsumePokeApi() {
      const response = await api.get(`/pokemon/${name}`)
      console.log(response.data)

      setPokemon(response.data)
      setStats(response.data.stats)
      setMoves(response.data.moves)
      if (response.data.types[0]) {
        setBackgroundColor(typeColor[response.data.types[0].type.name])
      }
    }

    ConsumePokeApi()
  }, [])

  const totalStats = () => {
    const result = stats.reduce(
      (accumulator, curenteValue) => accumulator + curenteValue.base_stat, 0
    )
    return result
  }

  const handleMoves = () => {
    let mymoves = []

    if(moves.length > 0) {
      mymoves.push(moves[0].move.name)
      mymoves.push(moves[1].move.name)
      mymoves.push(moves[2].move.name)
      mymoves.push(moves[3].move.name)
    }

    console.log(mymoves)

    return mymoves
  }


  return pokemon && (
    <>
      <Header showAllPokemons showDeletePokemonBtn pokemonName={name} />

      <Div >
        <h1>Detalhes</h1>
        <CardContainerDetails backgroundColor={backgroundColor}>
          <Card1>
            <CardPokemomImagem>
              <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemom de frente" />
              </div>
              <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`} alt="pokemom de costas" />
              </div>
            </CardPokemomImagem>

            <CardStats>
              <p>Base Stats</p>

              <div className="progress">
                <p className="stats">HP</p>
                <strong>{stats[0] && stats[0].base_stat}</strong>
                <BarraProgresso backgroundColor={stats[0] && stats[0].base_stat > 50 ? '#f17400' : '#fff44e'} progress={stats[0] && stats[0].base_stat} />
              </div>

              <div className="progress">
                <p className="stats">Attack</p>
                <strong>{stats[1] && stats[1].base_stat}</strong>
                <BarraProgresso backgroundColor={stats[1] && stats[1].base_stat > 50 ? '#f17400' : '#fff44e'} progress={stats[1] && stats[1].base_stat} />
              </div>

              <div className="progress">
                <p className="stats">Defense</p>
                <strong>{stats[2] && stats[2].base_stat}</strong>
                <BarraProgresso backgroundColor={stats[2] && stats[2].base_stat > 50 ? '#f17400' : '#fff44e'} progress={stats[2] && stats[2].base_stat} />
              </div>

              <div className="progress">
                <p className="stats">Sp. Atk</p>
                <strong>{stats[3] && stats[3].base_stat}</strong>
                <BarraProgresso backgroundColor={stats[3] && stats[3].base_stat > 50 ? '#f17400' : '#fff44e'} progress={stats[3] && stats[3].base_stat} />
              </div>

              <div className="progress">
                <p className="stats">Sp. Def</p>
                <strong>{stats[4] && stats[4].base_stat}</strong>
                <BarraProgresso backgroundColor={stats[4] && stats[4].base_stat > 50 ? '#f17400' : '#fff44e'} progress={stats[4] && stats[4].base_stat} />
              </div>

              <div className="progress">
                <p className="stats">Speed</p>
                <strong>{stats[5] && stats[5].base_stat}</strong>
                <BarraProgresso backgroundColor={stats[5] && stats[5].base_stat > 50 ? '#f17400' : '#fff44e'} progress={stats[5] && stats[5].base_stat} />
              </div>
              <div className="progress">
                <p className="stats">Total</p>
                <strong id="total"> {totalStats()}
                </strong>
                <BarraProgresso backgroundColor="red" progress={0} />

              </div>

            </CardStats>

          </Card1>

          <Card2>


            <CardContainerPokemom>

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
                  <img className="pokemon_image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="pokedeximg" />


                </CardImage>

              </CardBody>

            </CardContainerPokemom>

            <CardMoves>
              <p>Moves</p>
              {handleMoves().map((move) => {
                return <div className="moves" key="move">{move}</div>
              })}
            </CardMoves>

          </Card2>

        </CardContainerDetails>

      </Div>
    </>
  )
}

export default PokedexDetailsPage