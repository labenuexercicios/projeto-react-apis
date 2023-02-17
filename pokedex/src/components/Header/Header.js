import React from "react"
import Logo from "./image/pokemon-logo.png"
import Pokebola from "./image/129-1298368_ref-pokeball.png"
import { homePage, pokedexPage } from "../../routes/coordinator";
import { useNavigate} from "react-router-dom";
import * as style  from "./style";  


export const Header = (props) => {
  const navigate = useNavigate()
  const ulr = window.location.href
 
  return (
    <>
    {ulr === "http://localhost:3000/pokedex" ? 
      <style.Header>
       <style.Img onClick={() => homePage (navigate)} src={Logo}/>
      </style.Header> 
          : 
      <style.Header>
        <style.Img onClick={() => homePage (navigate)} src={Logo}/>
        <style.Title> {props.name}</style.Title>
        <style.Div onClick={() => pokedexPage (navigate)}>
          <style.Img src={Pokebola}/>
          <style.P >Pokedex</style.P>
        </style.Div>
      </style.Header>
    }   
    </>
  )
} 