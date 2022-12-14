import Logo from "../../img/Pokémon_logo.svg.png";
import Pokedex from "../../img/pokedex.webp";
import Pokeball from "../../img/pokebola-go.png"
import { LogoImg, HeaderDiv, PokedexButton, PokedexImg, BlankSpace, DeleteButton } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { goToPokedex, goToDetail, goToHome } from "../../routes/Coordinator";

export const Header = () => {
    const navigate = useNavigate();
    const pathParams = useParams ();

  return (
    <HeaderDiv>
        {pathParams.variable === 'pokedex' || pathParams.variable === 'detail' ? <PokedexButton onClick={() => goToHome(navigate)}><PokedexImg src={Pokeball}/> <strong>Todos Pokémons</strong></PokedexButton> : <BlankSpace></BlankSpace>}
        <LogoImg src={Logo} />
        {pathParams.variable === 'pokedex' || pathParams.variable === 'detail' ? (pathParams.variable === 'pokedex'? <BlankSpace></BlankSpace> : <DeleteButton>Excluir</DeleteButton>) : <PokedexButton onClick={() => goToPokedex(navigate, "pokedex")}><PokedexImg src={Pokedex}/> <strong>Pokédex</strong></PokedexButton> }
        {/* {pathParams.variable !== 'pokedex' || pathParams.variable !== '' ? <DeleteButton>Excluir</DeleteButton> : <BlankSpace></BlankSpace>} */}
    </HeaderDiv>
  );
};
