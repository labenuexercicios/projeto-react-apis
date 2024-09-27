import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { HeaderPagDetalhe } from "../../Componentes/Header/HeaderPagDetalhe/HeaderPagDetalhe";
import { HeaderPagLista } from "../../Componentes/Header/HeaderPagLista/HeaderPagLista";
import { Centralizarcapturadetalhe, HeaderPagListaCss2 } from "../../Componentes/Header/HeaderPagLista/Style";
import { PokemonCard } from "../../Componentes/PokemonCard/PokemonCard";
import { PokemonCard2 } from "../../Componentes/PokemonCard/PokemonCard2";
import { Posicaodocard } from "../../Componentes/PokemonCard/Style";
import { PokedexListaCss } from "../PokedexLista/Style";
import { Text } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, ButtonGroup } from '@chakra-ui/react'


export const Pokedexdetalhe = (props) =>{
    const navigate = useNavigate()


    function irParaPaginaInicial(){
        navigate("/")
    }


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

                <Button onClick={irParaPaginaInicial} height={300} width={800} colorScheme='facebook' >
                Capturar pokemons
              </Button>
                </Centralizarcapturadetalhe>
            )}
        </PokedexListaCss>
        </div>
    )
}

export default Pokedexdetalhe;