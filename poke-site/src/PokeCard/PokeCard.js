import axios from 'axios'
import React, { useEffect, useState } from 'react'
import pokeBola from "../imagens/pokeBola.png"
import PokeCardStyle from "./PokeCard.style"
import { cores } from "../utilitarios/Cores"
import { useParams,useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Rotas/Context/GlobalContext'
// import { vaiParaDetalhes } from '../Rotas/cordenation'


const Pokecard = (props) => {
  const { arrayPokemons, todosPokemons } = props


  console.log('arrayPokemon', arrayPokemons)

  const [pokemon, setPokemon] = useState([])
  const [cor, setCor] = useState([])
  const [arrayPokedex, setArrayPokedex] = useState([])
  const [tipoFuncionar, setTipoFuncionar] = useState(false)

  //  const navigate = useNavigate()


  useEffect(() => {
    resquisicao()

  }, [todosPokemons])


  const resquisicao = () => {
    axios.get(`${arrayPokemons.url}`)
      .then((res) => {
        setPokemon(res.data)
        setTipoFuncionar(true)
        setCor(res.data.types[0].type.name)

      })
      .catch((err) => {
        console.log(err)
      })

  }
  // const resquisicao = async () => {
  //   try {
  //     const res = await axios.get(`${arrayPokemons.url}`)
  //   console.log(res.data)
  //     setCor(res.data.types[0].type.name)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  console.log('pokemon', pokemon)

  const tipo = () => {
    if (tipoFuncionar && pokemon.types[1]) {
      return (
        pokemon.types[0].type.name + " " + pokemon.types[1].type.name)
    }
    return (
      pokemon.types && pokemon.types[0].type.name
    )
  }
 

  const adcPokedex = (pokeadd) => {
    const estaNaPokedex = arrayPokedex.find((pokemonNaPokedex) => pokemonNaPokedex.name === pokeadd.name)
    if (!estaNaPokedex) {
      const novoArrayPokedex = [...arrayPokedex, pokeadd]
      setArrayPokedex(novoArrayPokedex)
    }

  }

  const context = {
  pokemon,
  setPokemon,
  arrayPokedex,
  setArrayPokedex,
  adcPokedex,
  }

  return (


    <PokeCardStyle color={cores(cor)}>
      <div className='lado-esquerdo'>

        <div className='lado-esquerdo-superior'>
          <span>#{pokemon.id}</span>
          <h1>{pokemon.name}</h1>
        </div>

        <div className='lado-esquerdo-inferior'>
          <div className='tipo'>
            <span>{tipo()}</span>
            {/* <span>{pokemon.types && pokemon.types[0].type.name}</span> */}
          </div>
          <div>
            <button>Detalhes</button>
          </div>
        </div>

      </div>
      <div className='lado-direito'>
        <img className='ivissaur' src={pokemon.sprites?.other['official-artwork'].front_default} alt='ivissaur'></img>
        <img className='pokebola' src={pokeBola} alt='pokebola'></img>
        <button onClick={() => adcPokedex(pokemon)}>Capturar</button>
      </div>


    </PokeCardStyle>



  )
}



export default Pokecard