import React, { useEffect, useState } from 'react'
import Pokecard from '../../PokeCard/PokeCard.js'
import HomePageStyle from './HomePage.style.js'
import Header from "../../componentes/Header/Header"
import axios from 'axios'


 const Home = () => {

const [resposta,setResposta] = useState([])

  useEffect(() => {
    todosPokemons()

  },[])

  const todosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setResposta(res.data.results))
      .catch((err) => console.log(err))
  }

return (

  <HomePageStyle>
    <Header />
    <div className='cor-da-pagina'>
      <div className='margem-total'>
        <h1>Todos os Pokemons</h1>
      </div>
      <div className='pagina-dos-cards' >
        {resposta.map((pokemon)=>{
          return(<Pokecard pokemon={pokemon}/>)
        
        })}
      </div>
    </div>

  </HomePageStyle>

)
 }
 export default Home