import { useNavigate } from "react-router-dom"
import { HeaderPagListaCss, HeaderPagListaDireita, HeaderPagListaEsquerda, HeaderPagListaMeio } from "../HeaderPagLista/Style"
import logo from "../../../Imagens/image2.png"
import { Button, ButtonGroup } from '@chakra-ui/react'


export const HeaderPagDetalhe = () =>{


    const navigate = useNavigate()
    function pagToLista() {
        navigate("/")
    }

    return(
            <HeaderPagListaCss>
                <HeaderPagListaEsquerda>
                <Button colorScheme='teal' size='lg' onClick={pagToLista}>
                    Todos os pokemons
                </Button>
                </HeaderPagListaEsquerda>

                <HeaderPagListaMeio>
                    <img src={logo}></img>
                </HeaderPagListaMeio>
            </HeaderPagListaCss>



    )
}