import { HeaderContainerPokedexPage } from "./headerStyle";
import logo from '../../assets/logo.png'

export const HeaderPokedexPage = () => {
    return (
        <HeaderContainerPokedexPage>
            <div>
                <a type='button' href='#'>Todos Pokémons</a>
            </div>
            <div>
                <img src={logo} />
            </div>
        </HeaderContainerPokedexPage>
    )
}