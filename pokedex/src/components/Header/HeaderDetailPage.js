import { HeaderContainerDetailPage, DeleteButton } from "./headerStyle";
import logo from '../../assets/logo.png'


export const HeaderDetailPage = () => {
    return (
        <HeaderContainerDetailPage>
            <img src={logo} />
            <DeleteButton>Excluir da Pokédex</DeleteButton>

        </HeaderContainerDetailPage>
    )
}