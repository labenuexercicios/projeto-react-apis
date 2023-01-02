import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    background,
    Divider,
    Button,
    ModalContent,
    ModalOverlay,
    position,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fundoPokebola from "../assets/img/fundoPokebola.png"
import { Header } from '../components/header';
import { vaiParaDetalhes } from '../coordinator/coordinator';
import { cores } from './cores';
import {types} from "../templates/tipos"
import Modal from 'react-modal' ;
import { GlobalContext } from "../context/GlobalContext";
import React ,{ useContext} from "react"

  
 
  export default function Card(props) {


    const navigate = useNavigate()

  const mandarPokedex = (cardPokemon) => {
  const novoPokemon = [...props.addPoke]

  const pokemonNovo = novoPokemon.find(
    (item)=>item.id === cardPokemon.id)

    if(!pokemonNovo){
      const pokemonAdd = {...cardPokemon}
      novoPokemon.push(pokemonAdd)
    }
    const virarString = JSON.stringify(novoPokemon)
    localStorage.setItem("pokemon", virarString)
    props.setAddPoke(novoPokemon)
  }
   
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: '20%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: "1",
      borderRadius: "8px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      width:"451px",
      fontSize:"16px", 
      zIndex: "1"
      
      
     

    },
};

Modal.setAppElement('#root')

const [modalIsOpenAdd, setIsOpenAdd] = React.useState(false)

function openModal() {
  setIsOpenAdd(true);
}


function closeModal() {
  setIsOpenAdd(false);
}

const MandarMaisModal = (cardPokemon) => {
  mandarPokedex(cardPokemon)
    openModal()
}

 
    return (
      <>
      
      <Modal
                isOpen={modalIsOpenAdd}
                onRequestClose={closeModal}
                style={customStyles}
                
          
                
            >

                
                <h1><b>Gotcha!</b></h1>
                <p>O Pokémon foi adicionado a sua Pokédex</p>
                
       </Modal>
      

      <Center py={20} >
      
        <Box
          position={"relative"}
          width={"440px"}
          height={"210px"}
          left={"0px"}
          top={"0px"}
          borderRadius={"20px"}
          backgroundColor={props.cores}
          zIndex={0}
          >
          <Box>
            <Image 
            position={"absolute"}
            marginTop={"-53px"}
            width={"193px"}
            height={"193px"}
            left={"240px"}
            src={props.pokemon.sprites?.other["official-artwork"].front_default}
            
            />
            <Image
            src={fundoPokebola}
            position={"absolute"}
            width={"248px"}
            height={"210px"}
            left={"192px"}
            top={0}
            zIndex={-1}
            />
          </Box>
          <Stack pt={5} align={'start'} paddingLeft={"20px"} fontSize={"16px"}>
            <Heading fontSize={'2x2'} fontFamily={'body'} fontWeight={500} color={"white"} >
            {`#0${props.pokemon.id}`}
            <Box fontSize={"32px"}>
            <p>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</p>
            </Box>
            </Heading>
            <Box  height={"31px"} width={"99px"} >
            <Flex gap={"10px"}>{props.tipo}</Flex>
            </Box>
          </Stack>
          <Box display={"flex"} justifyContent={'space-between'} marginTop={"42px"} 
           marginRight={"25px"} marginLeft={"25px"} color={"white"} textDecoration={"underline"} >
          
          <button  onClick={()=>vaiParaDetalhes(navigate,props.pokemon.name)}><b>Detalhes</b></button>
          
          <Button background={"#FFFFFF"} color={"black"} 
           borderRadius={"8px"} width={"140px"} height={"36px"} fontFamily={'poppins'} fontStyle={"normal"}  lineHeight={"24px"} flex={"none"} order={0} flexGrow={0}
           onClick={()=>MandarMaisModal(props.pokemon)}>Capturar!</Button>
          </Box>
        </Box>
      </Center>
      </>
    );
  }


  
