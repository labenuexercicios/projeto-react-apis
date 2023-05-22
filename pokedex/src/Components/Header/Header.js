import { useLocation, useNavigate } from "react-router-dom"
import { ButtonExcluir, ButtonPokedex, ButtonVoltar, HeaderStyle, Logo } from "./headerStyle"

import {goToHome, goToList} from '../../Routes/Coordinator'

function Header (){
  const location = useLocation()
  const navigate = useNavigate()

  switch (location.pathname){
    case '/':
   return (
   <div>
      
        <HeaderStyle>
           <Logo/>
            <ButtonPokedex onClick={()=> goToList(navigate)}>Pokédex</ButtonPokedex>
            
        </HeaderStyle>
   </div>
   )
   case '/list':
     return (
       <div>
        <HeaderStyle>
        <ButtonVoltar onClick={()=>goToHome(navigate)}>{String.fromCharCode(60)} Todos Pokémons</ButtonVoltar>
         <Logo/>

        </HeaderStyle>
      </div>
    )
    case '/details':
      return (
        <div>
          <HeaderStyle>
          <ButtonVoltar onClick={()=>goToHome(navigate)}>{String.fromCharCode(60)} Todos Pokémons</ButtonVoltar>
         <Logo/>
         <ButtonExcluir>Excluir da Pokédex</ButtonExcluir>
          </HeaderStyle>
        </div>
      )
      default:
        return (
          <div>
        <HeaderStyle>
        <ButtonVoltar onClick={()=>goToHome(navigate)}>{String.fromCharCode(60)} Todos Pokémons</ButtonVoltar>
         <Logo/>

        </HeaderStyle>
      </div>
        )
}}

export default Header