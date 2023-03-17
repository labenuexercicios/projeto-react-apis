import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderPagDetalhe } from "../../Componentes/Header/HeaderPagDetalhe/HeaderPagDetalhe";
import { Centralizarcapturadetalhe, HeaderPagListaCss2 } from "../../Componentes/Header/HeaderPagLista/Style";
import { PokemonCard2 } from "../../Componentes/PokemonCard/PokemonCard2";
import { PokedexListaCss } from "../PokedexLista/Style";
import { Text } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@chakra-ui/react'


export const Pokedexdetalhe = (props) =>{
    const navigate = useNavigate()


    function irParaPaginaInicial(){
        navigate("/")
    }

    useEffect(()=>{
        const listaDeitensstorage2 = JSON.parse(localStorage.getItem("Pokemons escolhidos"))
        if(listaDeitensstorage2){
         props.setPokemonsEscolhidos(listaDeitensstorage2)
        }
      },[])


    return(
        <div>

        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
        <PokedexListaCss>
            <HeaderPagDetalhe navigate = {props.navigate}/>
            <HeaderPagListaCss2>
            <Text color='#61ADAA' fontSize='50px' as='abbr'>Todos os pokemons</Text>
            </HeaderPagListaCss2> 
            {props.pokemonsEscolhidos.length > 0 ? (
            <div>
            <PokemonCard2 setPokemonsEstanosEscolhidos = {props.setPokemonsEstanosEscolhidos} pokemonEstanosescolhidos = {props.pokemonEstanosescolhidos} detalhe = {props.detalhe} setDetalhe ={props.setDetalhe} pokemonsEscolhidos= {props.pokemonsEscolhidos} setPokemonsEscolhidos = {props.setPokemonsEscolhidos} pokemons = {props.pokemons} setPokemons = {props.setPokemons}/>
            </div>
                
            ) : (
                <Centralizarcapturadetalhe>

                <Button onClick={irParaPaginaInicial} height={100} width={300} flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={`blue.600`}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={
                    'blue'
                }  >
                Capturar pokemons
              </Button>
                </Centralizarcapturadetalhe>
            )}
        </PokedexListaCss>
        </div>
    )
}

export default Pokedexdetalhe;