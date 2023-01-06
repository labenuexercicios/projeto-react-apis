import React, { useState } from 'react'
import { Text, ChakraProvider, Flex, Img, Stack, Progress } from '@chakra-ui/react'
import { colors } from '../../assets/characteristics'
import pokeball from "../../assets/bigpokeball.svg"
import typeGrass from "../../assets/grass.svg"
import typePoison from "../../assets/poison.svg"
import typefire from "../../assets/fire.svg"
import typeWater from "../../assets/water.svg"
import typeBug from "../../assets/bug.svg"
import typeFlying from "../../assets/flying.svg"
import typeNormal from "../../assets/normal.svg"

export const DetailsCard = (pokeDetails) => {
    const getColor = (type) => {
        if (type?.length > 0) {
            const color = colors.find((color) => color.type === type[0].type.name)
            return color ? color['color'] : 'grey'
        }
        return 'grey'
    }

    console.log()

    const getImg = (type) => {
        if (type.type.name === "grass") {
            return <Img src={typeGrass} h={"30px"} w={"100px"} margin={"8px"} key={"grass"}></Img>
        } else if (type.type.name === "poison") {
            return <Img src={typePoison} h={"30px"} w={"100px"} margin={"8px"} key={"poison"}></Img>
        } else if (type.type.name === "fire") {
            return <Img src={typefire} h={"30px"} w={"100px"} margin={"8px"} key={"fire"}></Img>
        } else if (type.type.name === "water") {
            return <Img src={typeWater} h={"30px"} w={"100px"} margin={"8px"} key={"water"}></Img>
        } else if (type.type.name === "bug") {
            return <Img src={typeBug} h={"30px"} w={"100px"} margin={"8px"} key={"bug"}></Img>
        } else if (type.type.name === "flying") {
            return <Img src={typeFlying} h={"30px"} w={"100px"} margin={"8px"} key={"flying"}></Img>
        } else if (type.type.name === "normal") {
            return <Img src={typeNormal} h={"30px"} w={"100px"} margin={"8px"} key={"normal"}></Img>
        }
    }
    const TotalStats = pokeDetails.pokeDetails.stats?.reduce((a, b) => b.base_stat + a, 0)
    const maiscName = pokeDetails.pokeDetails.name?.[0].toUpperCase() + pokeDetails.pokeDetails.name?.substring?.(1)


    return (
        <ChakraProvider resetCSS>
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"row"}
            >
                <Img src={pokeball}
                    position={"absolute"}
                    h={"80%"}
                    top={"115px"}
                >
                </Img>
                <Flex
                    marginTop={"30px"}
                    height={"65vh"}
                    w={"1398px"}
                    borderRadius={"30px"}
                    position={"relative"}
                    bg={() => getColor(pokeDetails.pokeDetails.types)}
                >
                    <Img src={pokeball}
                        overflow={"hidden"}
                        position={"absolute"}
                        h={"100%"}
                        right={"0"}
                    ></Img>
                    <Flex as={"span"}
                        h={"100%"}
                        w={"300px"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        paddingLeft={"50px"}
                    >
                        <Stack as={"span"}
                            h={"44%"}
                            w={"282px"}
                            bg={"white"}
                            borderRadius={"15px"}
                            marginTop={"18px"}
                        >
                            <Img src={pokeDetails.pokeDetails.sprites?.front_default} ></Img>
                        </Stack>
                        <Stack as={"span"}
                            h={"44%"}
                            w={"282px"}
                            bg={"white"}
                            borderRadius={"15px"}
                            marginBottom={"20px"}
                        >
                            <Img src={pokeDetails.pokeDetails.sprites?.back_default} ></Img>
                        </Stack>
                    </Flex>
                    <Stack>
                        <Stack as={"span"}
                            marginLeft={"40px"}
                            h={"94%"}
                            w={"330px"}
                            bg={"white"}
                            borderRadius={"15px"}
                            marginTop={"18px"}

                        >
                            <Stack
                                border={"1px solid black"}
                                margin={"13px"}
                                boxShadow={"0px 4px 5px 0px rgba(0,0,0,0.34)"}
                            >
                                <Text
                                    marginLeft={"15px"}
                                    marginTop={"15px"}
                                    fontSize={"24px"}
                                    fontFamily={"inter"}
                                    fontWeight={"bold"}
                                >Base Stats</Text>
                                {
                                    pokeDetails.pokeDetails.stats?.map((stats) => {
                                        if (stats.stat.name === "hp") {
                                            stats.stat.name = "HP"
                                        }
                                        if (stats.stat.name === "attack") {
                                            stats.stat.name = "Attack"
                                        }
                                        if (stats.stat.name === "defense") {
                                            stats.stat.name = "Defense"
                                        }
                                        if (stats.stat.name === "special-attack") {
                                            stats.stat.name = "Sp. Atk"
                                        }
                                        if (stats.stat.name === "special-defense") {
                                            stats.stat.name = "Sp. Def"
                                        }
                                        if (stats.stat.name === "speed") {
                                            stats.stat.name = "Speed"
                                        }


                                        return <Flex as={"span"}
                                            alignItems={"center"}
                                            flexDirection={"row"}
                                            borderBottom={"1px solid #E5E5E5"}
                                            key={stats.stat.name}
                                        >
                                            <Stack
                                                w={"80px"}
                                                textAlign={"end"}
                                                alignItems={"end"}
                                            >
                                                <Text as={"span"}
                                                    display={"flex"}
                                                    paddingLeft={"20px"}
                                                    flexDirection={"row"}
                                                    fontFamily={"poppins"}
                                                >{stats.stat.name}
                                                </Text>
                                            </Stack>
                                            <Stack
                                                w={"50px"}
                                                textAlign={"end"}
                                                alignItems={"center"}
                                                fontFamily={"inter"}
                                                fontWeight={"bold"}
                                            >
                                                <Text >
                                                    {stats.base_stat}
                                                </Text>
                                            </Stack>
                                            <Stack
                                                width={"165px"}
                                            >
                                                {stats.base_stat > 50 &&
                                                    <Progress
                                                        bg={"none"}
                                                        colorScheme={"yellow"}
                                                        value={stats.base_stat}
                                                        filter={"auto"}
                                                        brightness={"140%"}
                                                        borderRadius={"4px"}
                                                    />}
                                                {stats.base_stat <= 50 &&
                                                    <Progress
                                                        bg={"none"}
                                                        colorScheme={"orange"}
                                                        filter={"auto"}
                                                        brightness={"120%"}
                                                        value={stats.base_stat}
                                                        borderRadius={"4px"}
                                                    />}
                                            </Stack>
                                        </Flex>
                                    })
                                }
                                <Flex as={"span"}
                                    alignItems={"center"}
                                    flexDirection={"row"}
                                    borderBottom={"1px solid #E5E5E5"}
                                >
                                    <Stack
                                        w={"80px"}
                                        textAlign={"end"}
                                        alignItems={"end"}
                                    >
                                        <Text as={"span"}
                                            display={"flex"}
                                            paddingLeft={"20px"}
                                            flexDirection={"row"}
                                            fontFamily={"poppins"}
                                        >Total:
                                        </Text>
                                    </Stack>
                                    <Stack
                                        w={"50px"}
                                        textAlign={"end"}
                                        alignItems={"center"}
                                        fontFamily={"inter"}
                                        fontWeight={"bold"}
                                    >
                                        <Text >
                                            {TotalStats}
                                        </Text>
                                    </Stack>
                                </Flex>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack
                        w={"500px"}
                        paddingLeft={"90px"}
                    >
                        <Stack
                            paddingLeft={"10px"}
                        >
                            <Text
                                marginTop={"20px"}
                                fontFamily={"inter"}
                                fontWeight={"700"}
                                color={"white"}
                            >#{pokeDetails.pokeDetails.id > 10 ? pokeDetails.pokeDetails.id : "0" + pokeDetails.pokeDetails.id}</Text>
                            {pokeDetails.pokeDetails.name &&
                                <Text as={"span"}
                                    fontFamily={"inter"}
                                    fontWeight={"700"}
                                    fontSize={"42px"}
                                    color={"white"}
                                    h={"45px"}
                                    zIndex={"1001"}
                                >{maiscName}</Text>}
                        </Stack>
                        <Stack
                            h={"40px"}
                            w={"150px"}
                            margin={"8"}
                            zIndex={"1001"}
                            display={"flex"}
                            flexDirection={"row"}
                        >
                            {pokeDetails.pokeDetails.types?.map((type) => {
                                return getImg(type)
                            })}
                        </Stack>
                        <Stack as={"span"}
                            paddingTop={"20px"}
                        >
                            <Stack
                                h={"402px"}
                                w={"320px"}
                                bg={"white"}
                                borderRadius={"15px"}
                                marginTop={"12px"}
                                zIndex={"1001"}
                            >
                                <Text
                                    marginLeft={"15px"}
                                    marginTop={"15px"}
                                    fontSize={"24px"}
                                    fontFamily={"inter"}
                                    fontWeight={"bold"}
                                >Moves:</Text>
                                {
                                    pokeDetails.pokeDetails.moves?.slice(0, 5).map((move) => {
                                        let ToMaisc = move.move.name[0].toUpperCase() + move.move.name.substring(1)
                                        const skillsName = ToMaisc.replace("-", " ")

                                        return <Stack as={"span"}
                                            w={"150px"}
                                            paddingLeft={"15px"}
                                            justifyContent={"center"}
                                            textAlign={"center"}
                                            key={move.move.name}
                                        >
                                            <Text
                                                border={"1px dashed #dbdbdb"}
                                                borderRadius={"20px"}
                                                padding={"10px"}
                                                bg={"#ececec"}
                                                fontFamily={"montserrat"}
                                                fontWeight={"bold"}
                                                fontSize={"14"}
                                                key={move.move.name}
                                            >{skillsName}</Text>
                                        </Stack>
                                    })
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack as={"span"}
                        zIndex={"1001"}
                        position={"absolute"}
                        right={"0"}
                        top={"-100"}
                    >
                        <Img src={pokeDetails.pokeDetails.sprites?.other["official-artwork"].front_default}
                            h={"270px"}
                            w={"270px"}></Img>
                    </Stack>
                </Flex>
            </Flex>
        </ChakraProvider >
    )
}
