import { useNavigate } from "react-router-dom"
import { HeaderPagListaCss, HeaderPagListaDireita, HeaderPagListaEsquerda, HeaderPagListaMeio } from "../HeaderPagLista/Style"



export const HeaderPagCap = (props) =>{
    console.log(props.pokemonEstanosescolhidos)
    console.log(props.pokemon)

    console.log(props.pokemonsEscolhidos)

    const Excluirpokemon =() =>{

    }

    
    const navigate = useNavigate()
    function pagToLista() {
        navigate("/")
    }

    return(
            <div>
                {props.pokemonEstanosescolhidos === true ? (
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
                        <button onClick={Excluirpokemon} >Excluir da Pokedex</button>
                    </HeaderPagListaDireita>

                </HeaderPagListaCss>

                    
                ) :(
                <HeaderPagListaCss>
                    <HeaderPagListaEsquerda>
                        <div>
                        <button onClick={pagToLista}>Todos os pokemons</button>
                        </div>
                    </HeaderPagListaEsquerda>

                    <HeaderPagListaMeio>
                        Logoadsasddas
                    </HeaderPagListaMeio>


                </HeaderPagListaCss>

                )
                }
            </div>



    )
    
}