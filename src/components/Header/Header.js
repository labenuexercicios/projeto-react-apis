import { useNavigate } from "react-router-dom";
import { ButtonPokedex, Head, Logo } from "./HeaderStyled";
import { goToPokedex } from "../../router/coordinator";

export default function Header(){

    const navigate=useNavigate();

    return(
        <Head>
        <Logo />
        <ButtonPokedex onClick={()=> goToPokedex(navigate)}>
            Pokedex
        </ButtonPokedex>
        </Head>
    )
}