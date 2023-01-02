import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Header } from "../components/header";
import { vaiParaHome, vaiParaDetalhes } from "../coordinator/coordinator";
import {CardPokedex} from "../pages/pokedex.styled"
import {types} from "../templates/tipos"
import { cores } from "../templates/cores";
import fundoPokebola  from  "../assets/img/fundoPokebola.png"
import {CardGeral} from "../pages/pokedex.styled"
import {ContainerFundo, CardModal} from "../pages/pokedex.styled"
import {CardType} from "../pages/pokedex.styled"
import {Button} from '@chakra-ui/react';
import Modal from 'react-modal' ;
import { GlobalContext } from "../context/GlobalContext";



export function Pokedex (props) {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: '20%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: "1",
          borderRadius: "8px"
 
        },
      };

      

      const context = useContext(GlobalContext)

      const { modalIsOpen, setIsOpen} = context

      function openModal() {
        setIsOpen(true);
      }
    

      function closeModal() {
        setIsOpen(false);
      }
    


    const navigate = useNavigate()
    
    
    const tipo = (pokemon) => {
        if(pokemon.types[1]){
            return(
                <>
               <img src={types(pokemon.types[0].type.name)}/> 
               <img src={types(pokemon.types[1].type.name)}/>
               </>
               )
            
        }else{return <img src={types(pokemon.types[0].type.name)}/>
    }
    }
    

    const excluirPokemom = (pokemon) =>{
        const filtroExcluir = props.addPoke.filter(
            (poke) => poke.id !== pokemon.id)
            const virarString = JSON.stringify(filtroExcluir)
            localStorage.setItem("pokemon", virarString)
            props.setAddPoke(filtroExcluir)
    }
   
    const consultarPokemon = () =>{
        if(localStorage.getItem("pokemon")){
          const pegar = localStorage.getItem("pokemon")
          const transformarArray = JSON.parse(pegar)
          props.setAddPoke(transformarArray)
        }
       }

    const excluirMaisModal = (pokemon) =>{
    excluirPokemom(pokemon)
    openModal()
    }
    
       useEffect (()=>{
        consultarPokemon()
       },[])
   
    return(
        <>
        <Header/>

        <ContainerFundo>
        <p className="CardTitulo"><b>Meus Pokémons</b></p>
        <CardGeral>
       
       
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
           >
           
            <CardModal>
            <h1><b>Oh, no!</b></h1>
            <p><b>O Pokémon foi removido da sua Pokédex</b></p>
            </CardModal>
          </Modal>
       
        {props.addPoke.map((pokemon)=>{
        
        return(

           

        <CardPokedex color={cores(pokemon.types[0].type.name)} >
        
        <div className="CardFundo">
        <div className="ImagemFundo">
        <img src={fundoPokebola}/>
        </div>
        <div>
        <div className="CardId">
        <p><b>{`#0${pokemon.id}`}</b></p>
        </div>
        <div className="CardName">
        <p><b>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</b></p>
        </div>
        <img className="CardImage" src={pokemon.sprites?.other["official-artwork"].front_default}/>
        <CardType >
        <p className="CardTipo">{tipo(pokemon)}</p>
        </CardType>
        </div>

        <div className="CardButton">
        <button className="BotaoDetalhes" onClick={()=>vaiParaDetalhes(navigate, pokemon.name)}><b>Detalhes</b></button>
        <Button className="BotaoExcluir"  onClick={()=>excluirMaisModal(pokemon)}>Excluir</Button>
        </div>
        </div>
        </CardPokedex>
        )})}
        </CardGeral>
        </ContainerFundo>
        </>
    )

}