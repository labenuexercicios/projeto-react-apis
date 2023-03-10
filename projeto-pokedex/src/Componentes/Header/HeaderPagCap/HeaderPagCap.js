import { useNavigate } from "react-router-dom"
import { HeaderPagListaCss, HeaderPagListaDireita, HeaderPagListaEsquerda, HeaderPagListaMeio } from "../HeaderPagLista/Style"



export const HeaderPagCap = () =>{

    
    const navigate = useNavigate()
    function pagToLista() {
        navigate("/")
    }

    return(
            <HeaderPagListaCss>
                <HeaderPagListaEsquerda>
                    <div>
                    <button onClick={pagToLista}>Todos os pokemons</button>
                    </div>
                </HeaderPagListaEsquerda>

                <HeaderPagListaMeio>
                     Logoadsasddas
                </HeaderPagListaMeio>

                <HeaderPagListaDireita>
                    Excluir da Pokedex
                </HeaderPagListaDireita>
            </HeaderPagListaCss>



    )
    
}