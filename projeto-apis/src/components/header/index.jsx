import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../image/logo.png"
import { ContainerHeader } from './styled'
export const Header = () => {
  return (
    <ContainerHeader>
      <Link to={"/"}>
      <img  src={logo}/>
      </Link>
      
      <div className='border'>
        
        <Link to={"/pokedex"}>
        <p>Pokedex</p>
      </Link>
        
      </div>
            
    </ContainerHeader>
  )
}
