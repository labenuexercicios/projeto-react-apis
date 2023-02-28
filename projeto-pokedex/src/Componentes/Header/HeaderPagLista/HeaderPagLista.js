import { HeaderPagListaCss, HeaderPagListaCss2, HeaderPagListaDireita, HeaderPagListaEsquerda, HeaderPagListaMeio } from "./Style"




export const HeaderPagLista = () =>{


    return(
            <HeaderPagListaCss>
                <HeaderPagListaEsquerda>
                    <div>
                        Em branco
                    </div>
                </HeaderPagListaEsquerda>

                <HeaderPagListaMeio>
                     Logo
                </HeaderPagListaMeio>

                <HeaderPagListaDireita>
                    Botao pokedex
                </HeaderPagListaDireita>
            </HeaderPagListaCss>



    )
}