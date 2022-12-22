import axios from 'axios'
import React, { useEffect, useState } from 'react'
import pokeBola from "../imagens/pokeBola.png"
import PokeCardStyle from "./PokeCard.style"
import { cores } from "../utilitarios/Cores"
import { useContext } from 'react'
import { GlobalContext } from '../Rotas/Context/GlobalContext'
import { json } from 'react-router-dom'
import { vaiParaDetalhes } from '../Rotas/cordenation'
import { useNavigate } from 'react-router-dom'
import { ImgTipo } from '../utilitarios/Tipo'
import { useLocation } from 'react-router-dom'



const Pokecard = (props) => {
  const { propsPokemon } = props

  const navigate = useNavigate()

  const [pokemon, setPokemon] = useState([])
  const [cor, setCor] = useState([])
  const [tipoFuncionar, setTipoFuncionar] = useState(false)

  const context = useContext(GlobalContext)

  const location = useLocation()

  const { arrayPokedex,
    setArrayPokedex,
  } = context

  useEffect(() => {

    resquisicao()

  }, [])


  const resquisicao = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${propsPokemon.name}`)
      .then((res) => {
        setPokemon(res.data)
        setTipoFuncionar(true)
        setCor(res.data.types[0].type.name)

      })
      .catch((err) => {
        console.log(err)
      })

  }


  const tipo = () => {
    if (tipoFuncionar && pokemon.types[1]) {
      return (
        <>
          <img src={ImgTipo(pokemon.types[0].type.name)} />
          <img src={ImgTipo(pokemon.types[1].type.name)} />
        </>
      )
    }
    return (
      <img src={ImgTipo(pokemon.types && pokemon.types[0].type.name)} />
    )
  }


  const adcPokedex = (pokeadd) => {
    const estaNaPokedex = arrayPokedex.find((pokemonNaPokedex) => pokemonNaPokedex.name === pokeadd.name)
    console.log("entrou")
    if (!estaNaPokedex) {
      const novoArrayPokedex = [...arrayPokedex, pokeadd]
      setArrayPokedex(novoArrayPokedex)

      localStorage.setItem("pokedex", JSON.stringify(novoArrayPokedex))
    }

  }
  const removeDaPokedex = (removePokemon) => {
    const novoArrayPokedex = arrayPokedex
      .filter((pokemonNaPokedex) => pokemonNaPokedex.name !== removePokemon.name)
        setArrayPokedex(novoArrayPokedex)
     
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
          </div>
          <div>
          {location.pathname === "/" ? (
            <button onClick={() => adcPokedex(propsPokemon)}>Capturar</button>)
            :
            (<button onClick={() => removeDaPokedex(propsPokemon)}>Excluir</button>)
          }
          <a onClick={() => vaiParaDetalhes(navigate, propsPokemon.name)}>Detalhes</a>
          </div>
        </div>

      </div>
      <div className='lado-direito'>
        <img className='ivissaur' src={pokemon.sprites?.other['official-artwork'].front_default} alt='ivissaur'></img>
        {/* <img className='pokebola' src={pokeBola} alt='pokebola'></img> */}
      </div>
      <div>
        {/* {location.name === "/" ? (
          <button onClick={() => adcPokedex(propsPokemon)}>Capturar</button>)
          :
          (<button onClick={() => removeDaPokedex(propsPokemon)}>Excluir</button>)
        }
        <a onClick={() => vaiParaDetalhes(navigate, propsPokemon.name)}>Detalhes</a> */}
      </div>


    </PokeCardStyle>



  )
}



export default Pokecard