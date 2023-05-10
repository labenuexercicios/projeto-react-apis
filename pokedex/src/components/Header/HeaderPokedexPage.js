import { HeaderContainerPokedexPage } from "./headerStyle";
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { goToPokemonsListPage } from "../../router/coordinator";

export const HeaderPokedexPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <HeaderContainerPokedexPage>
                <div>
                    <a type='button' href='#' onClick={() => goToPokemonsListPage(navigate)}>Todos Pokémons</a>
                </div>
                <div>
                    <img src={logo} />
                </div>
            </HeaderContainerPokedexPage>
            <h1>Aqui é onde serão renderizados os Pokémons adicionados à Pokédex</h1>
        </div>
    )
}