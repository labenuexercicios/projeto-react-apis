import { useNavigate } from "react-router-dom"
import { HeaderPagListaCss, HeaderPagListaDireita, HeaderPagListaEsquerda, HeaderPagListaMeio } from "../HeaderPagLista/Style"
import { Button, ButtonGroup } from '@chakra-ui/react'
import logo from "../../../Imagens/image2.png"

export const HeaderPagCap = (props) =>{


    const Excluirpokemon =() =>{

        const carrinhoComItem = props.pokemonsEscolhidos.find((item) => item.id === props.detalhe.id);
        const novoarray = props.pokemons
        novoarray.splice(props.detalhe.id - 1, 0, carrinhoComItem)
        novoarray.sort(function(a,b) {
            if(a.id < b.id){
              return -1
            }
            if(a.id > b.id){
              return 1
            }
          })
        props.setPokemons(novoarray)


        const carrinhoSemItem = props.pokemonsEscolhidos.filter((item) => item.id !== props.detalhe.id);
        props.setPokemonsEscolhidos(carrinhoSemItem)
        props.setPokemonsEstanosEscolhidos(false)
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
                    <Button colorScheme='teal' size='lg' onClick={pagToLista}>Todos os pokemons</Button>
                    </HeaderPagListaEsquerda>

                    <HeaderPagListaMeio>
                      <img src={logo}></img>
                    </HeaderPagListaMeio>

                    <HeaderPagListaDireita>
                    <Button onClick={Excluirpokemon} backgroundColor="red" colorScheme='teal' size='lg' onClick={pagToLista}>Excluir</Button>
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