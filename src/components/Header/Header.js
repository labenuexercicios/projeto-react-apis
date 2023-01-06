import React, { useContext, useEffect } from 'react'
import {
    ChakraProvider,
    Flex,
    Image,
    Button,
    Text,
    Stack
} from "@chakra-ui/react";
import logo from "../../assets/logopokemon.svg"
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToPokedexPage } from '../Router/coordinator';
import { GlobalContext } from '../contexts/GlobalContext';

const Header = ({ pokeDetails }) => {
    const context = useContext(GlobalContext)
    const { pokedex, removePokedex, setPokedex, getPokemons, pokemons, setGotcha, setOhNo, addToPokedex } = context
    const route = window.location.pathname
    const navigate = useNavigate()

    const removeFromPokedex = (pokemon) => {
        pokemon.find((pokefilter) => {
            if (pokeDetails.name === pokefilter.name) {
                setOhNo(true)
                setTimeout(() => {
                    setOhNo(false)
                }, 1000)
                return removePokedex(pokefilter)
            }
        })

    }

    const addToPokedexFromDetails = (pokemon) => {
        pokemon.find((pokefilter) => {
            if (pokeDetails.name === pokefilter.name) {
                return addToPokedex(pokefilter)
            }
            setGotcha(true)
            setTimeout(() => {
                setGotcha(false)
            }, 1000)
        })
    }

    const cleanPokedex = () => {
        setPokedex([])
        getPokemons()
    }

    return (
        <ChakraProvider resetCSS>
            <Flex position={"relative"}
                h={"15vh"}
                alignItems={"center"}
                justifyContent={"center"}>
                {
                    route === "/pokedex" &&
                    <Flex
                        position={"absolute"}
                        left={"100px"}
                        cursor={"pointer"}
                        _hover={{
                            color: "#3F454C"
                        }}
                        onClick={() => goToHomePage(navigate)}
                    >
                        <Text
                            fontFamily={"poppins"}
                            fontWeight={"700"}
                            fontSize={"24"}
                        >{"<"}</Text>
                        <Text
                            fontFamily={"poppins"}
                            fontWeight={"700"}
                            textDecorationLine={"underline"}
                            fontSize={"24"}
                        >Todos Pokémons</Text>
                    </Flex>
                }
                {
                    route === "/pokedex" &&
                    <Button
                        position={"absolute"}
                        right={"30"}
                        w={"226px"}
                        h={"57px"}
                        color={"white"}
                        bg={'#FF6262'}
                        fontFamily={"poppins"}
                        fontWeight={"400"}
                        _hover={{ bg: "#FF8686" }}
                        _active={{ bg: '#A64343' }}
                        onClick={() => cleanPokedex()}
                    >Limpar Pokédex</Button>
                }
                {
                    route.includes("/details") &&
                    <Flex
                        position={"absolute"}
                        left={"100px"}
                        cursor={"pointer"}
                        _hover={{
                            color: "#3F454C"
                        }}
                        onClick={() => goToHomePage(navigate)}
                    >
                        <Text
                            fontFamily={"poppins"}
                            fontWeight={"700"}
                            fontSize={"24"}
                        >{"<"}</Text>
                        <Text
                            fontFamily={"poppins"}
                            fontWeight={"700"}
                            textDecorationLine={"underline"}
                            fontSize={"24"}
                        >Todos Pokémons</Text>
                    </Flex>
                }
                <Image h={"113px"}
                    src={logo}
                />
                {route === "/" &&
                    <Button
                        position={"absolute"}
                        right={"30"}
                        w={"287px"}
                        h={"74px"}
                        color={"white"}
                        bg={'#33A4F5'}
                        fontFamily={"poppins"}
                        fontWeight={"700"}
                        fontSize={"24px"}
                        _hover={{ bg: "#2494E3" }}
                        _active={{ bg: '#33A4F5' }}
                        onClick={() => goToPokedexPage(navigate)}
                    >Pokédex</Button>}

                {
                    route.includes("/details") &&
                    <Button
                        position={"absolute"}
                        right={"300px"}
                        w={"226px"}
                        h={"57px"}
                        color={"white"}
                        bg={'#33A4F5'}
                        fontFamily={"poppins"}
                        fontWeight={"400"}
                        _hover={{ bg: "#2494E3" }}
                        _active={{ bg: '#33A4F5' }}
                        onClick={() => addToPokedexFromDetails(pokemons)}
                    >Adicionar na Pokédex</Button>
                }
                {
                    route.includes("/details") &&
                    <Button
                        position={"absolute"}
                        right={"30px"}
                        w={"226px"}
                        h={"57px"}
                        color={"white"}
                        bg={'#FF6262'}
                        fontFamily={"poppins"}
                        fontWeight={"400"}
                        _hover={{ bg: "#FF8686" }}
                        _active={{ bg: '#A64343' }}
                        onClick={() => removeFromPokedex(pokedex)}
                    >Excluir da Pokédex</Button>
                }
            </Flex>
        </ChakraProvider>
    )
}

export default Header