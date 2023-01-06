import React, { useContext} from 'react'
import Pokecard from '../../PokeCard/PokeCard.js'
import HomePageStyle from '../HomePage/HomePage.style'
import Header from "../../componentes/Header/Header"
import { GlobalContext } from '../../Rotas/Context/GlobalContext.js'
import { useEffect } from "react"
import { UsarModal } from '../../componentes/Modal.js'


const Pokedex = () => {
  

  const context = useContext(GlobalContext)

  const { setArrayPokedex,
    arrayPokedex } = context


    const consultar = ()=>{
      if (localStorage.getItem('pokedex')){
        const buscar = localStorage.getItem('pokedex')
        const buscarLocal = JSON.parse(buscar)
        setArrayPokedex(buscarLocal)
      }
    }
    useEffect(()=>{
      consultar()
    },[])
  console.log(arrayPokedex)
  return (

    <HomePageStyle>
      <UsarModal/>
      <Header />
    
      <div className='cor-da-pagina'>
        <div className='margem-total'>
          <h1>Pokedex</h1>
        </div>
        <div className='pagina-dos-cards' >
          {arrayPokedex.map((propsPokemon) => {
            return (<Pokecard
              propsPokemon={propsPokemon}
              key={propsPokemon.name}
            />)

          })}
        </div>
      </div>

    </HomePageStyle>

  )
}
export default Pokedex 