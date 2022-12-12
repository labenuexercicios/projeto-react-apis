import React from 'react'
import {useNavigate} from "react-router-dom"
import { goToPokedexPage } from '../router/coordinator'

const Homepage = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>HomePage</div>
    <button onClick={()=>goToPokedexPage(navigate)}>Pokedex</button>
    </>
  )
}

export default Homepage