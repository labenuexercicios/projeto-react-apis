import { useNavigate } from "react-router-dom"
import { ButtonPokedex, ButtonVoltar, HeaderStyle } from "./headerStyle"
import logo from '/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/assets/logo.png'
import {goToHome, goToList} from '../../Routes/Coordinator'

function Header (){
  const navigate = useNavigate()

   return (
   <div>
      
        <HeaderStyle>
            <ButtonVoltar onClick={()=>goToHome(navigate)}>Todos Pokémons</ButtonVoltar>
           <img src={logo} alt="Logo Pokemon"></img>
            <ButtonPokedex onClick={()=> goToList(navigate)}>Pokédex</ButtonPokedex>
        </HeaderStyle>
   </div>
   )
}

export default Header