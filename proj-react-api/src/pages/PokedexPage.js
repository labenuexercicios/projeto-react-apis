import React from 'react'
import {useNavigate} from "react-router-dom"
import { goToPageDetails } from '../router/coordinator'

const PokedexPage = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>PokedexPage</div>
    <button onClick={()=>goToPageDetails(navigate)}>PageDetails</button>
    </>
  )
}

export default PokedexPage