import { ButtonPokedex, ButtonVoltar, HeaderStyle } from "./headerStyle"
import logo from '/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/assets/logo.png'

export default function Header (){
   return (
   <div>
        <HeaderStyle>
           <img src={logo} alt="Logo Pokemon"></img>
            <ButtonPokedex>Pokédex</ButtonPokedex>
            <ButtonVoltar>Todos Pokémons</ButtonVoltar>
        </HeaderStyle>
   </div>
   )
}