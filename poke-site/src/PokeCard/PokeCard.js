import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import ivissaur from "../imagens/Ivissaur.png"
import pokeBola from "../imagens/pokeBola.png"
import tagGrass from "../imagens/tagGrass.png"
import tagPoison from "../imagens/tagPoison.png"
import PokeCardStyle from "./PokeCard.style"
import paraDetalhes from "../Rotas/cordenation"


const Pokecard = (props) => {
  const {pokemon} = props

// console.log('pokemon',pokemon)

const [Objpokemon, setObjPokemon] = useState([])

useEffect (()=>{
resquisicao()

},[])

const resquisicao = ()=>{
axios.get(`${pokemon.url}`)
.then((res)=>{
  console.log(res.data)
  setObjPokemon(res.data)
})
.catch((err)=>{
console.log(err)
})

}




  return (


    <PokeCardStyle>
      <div className='lado-esquerdo'>
        <div className='lado-esquerdo-superior'>
          <span>{Objpokemon.id}</span>
          <h1>{Objpokemon.name}</h1>
        </div>
        <div className='lado-esquerdo-inferior'>
          <img src={tagPoison} alt='etiqueta poison'></img>
          <img src={tagGrass} alt='etiqueta grass'></img>
        </div>
        <div className='detalhes'>
         {/* <button onClick={ ()=>paraDetalhes(navigate, )}>Detalhes</button>  */}
        </div>
      </div>
      <div className='lado-direito'>
      
          <img className='ivissaur' src={Objpokemon.sprites?.other['official-artwork'].front_default}alt='ivissaur'></img>
          <img className='pokebola' src={pokeBola} alt='pokebola'></img>
          <button>Capturar</button>
       
      </div>

    </PokeCardStyle>



  )
}

export default Pokecard