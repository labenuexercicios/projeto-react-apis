import { useNavigate } from "react-router-dom"
import { HeaderPagListaCss, HeaderPagListaDireita, HeaderPagListaEsquerda, HeaderPagListaMeio } from "../HeaderPagLista/Style"
import { Button} from '@chakra-ui/react'
import logo from "../../../Imagens/image2.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HeaderPagCap = (props) =>{
    const navigate = useNavigate()

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
        toast.success("Pokemon excluido com sucesso!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        
        navigate("/")
    }

    
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
                    <Button onClick={Excluirpokemon} backgroundColor="red" colorScheme='teal' size='lg'>Excluir</Button>
                    </HeaderPagListaDireita>

                </HeaderPagListaCss>

                    
                ) :(
                <HeaderPagListaCss>

                    <HeaderPagListaEsquerda>
                    <Button colorScheme='teal' size='lg' onClick={pagToLista}>Todos os pokemons</Button>
                    </HeaderPagListaEsquerda>

                    <HeaderPagListaMeio>
                      <img src={logo}></img>
                    </HeaderPagListaMeio>

                </HeaderPagListaCss>

                )
                }
            </div>



    )
    
}