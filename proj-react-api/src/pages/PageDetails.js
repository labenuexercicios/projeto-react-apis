import React, { useContext, useEffect } from 'react'
import { Wrap, Box, Center, WrapItem, Image, Stack, Progress, Text, Flex } from '@chakra-ui/react'
import Header from '../components/header/Header'
import { GlobalContext } from '../context/GlobalContext'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { baseUrl } from '../components/utils/baseUrl'
import { getTypesPokemon } from '../assets/pokemon-types/pokemons_types'
import { Container, ContainerDetails } from './PageDetails.styled'
import { getColorCard } from '../assets/pokemon-types/getColorCard'
import  axios  from 'axios'


const PageDetails = (props) => {
  const context = useContext(GlobalContext)
  const { pokedex, pokemons, setDeletePokemonPokedex, backPokemonHome,
     deletePokemonPokedex, pokemonFromPageDetails, callBackPokemonHome, 
     setCallPlace,pokemonShow,setPokemonShow, pokemonDetails,setPokemonDetails } = context
  console.log(pokemons)
  console.log(props)
  const params = useParams()
  console.log(params)
  // const [pokemonDetails,setPokemonDetails]=useState([])
  // const pokemonShow = []
  const [type1,setType1]=useState()
  const [type2,setType2]=useState()
  const [cor, setCor] = useState("")
  let totalStats = 0
  //aqui
  const findPokemon = async ()=>{
    try {

      const responseApi = await axios.get(`${baseUrl}/pokemon/${params.pokemonName}/`)
      setPokemonDetails(responseApi)
      
    }
    catch(error){
      
    }
  }

    const upTypes = async ()=>{
      if(pokemonDetails){
        setCor(getColorCard(pokemonDetails.data.types[0].type.name))
        setType1(pokemonDetails.data.types[0].type.name)
        setType2(pokemonDetails.data.types[1]?.type.name)
      }
    }
    useEffect(()=>{
      upTypes()
    },[pokemonDetails])
  
  useEffect(() => {
    // const Url = `${baseUrl}/pokemon/${params.pokemonName}/`
    findPokemon()
    // setPokemonShow([])
    // setCor(getColorCard(pokemonShow[2]?.data.types[0].type.name))

  }, [])
  // {
  //   for (let i of pokemons) {
  //     if (i.data.name === params.pokemonName) {
  //       pokemonShow.push(i)
  //     } else {
  //       for (let j of pokedex) {
  //         if (j.data.name === params.pokemonName) {
  //           pokemonShow.push(j)
  //           // setCor(getColorCard(pokemonShow[0]?.data.types[0].type.name))
  //         }
  //       }
  //     }
  //     // setCor(getColorCard(pokemonShow[0]?.data.types[0].type.name))

  //   }
  // }
  console.log(cor)
  console.log(pokemonDetails)

  return (
    <>
      <Header />

      <ContainerDetails >
        <text className='textDetailsOverall'>Detalhes</text>
        <Container cor={cor} >
          <div className='Div1'>
            <div className='img'>
              <img className='imgPokemon' src={pokemonDetails.data && pokemonDetails.data?.sprites?.front_default}></img>
            </div>
            <div className='img'>
              <img className='imgPokemon' src={pokemonDetails.data && pokemonDetails.data?.sprites?.back_default}></img>
            </div>
          </div>
          <div className='Div2'>
            {/* <div> */}
              <text className='textBaseStats'>Base stats</text>
              <div className='infoStats'>
                {pokemonDetails.data && pokemonDetails.data.stats?.map((stat) => {
                  {totalStats+= stat.base_stat}
                  return (
                    <text className='textStats'>
                      <text> </text>
                      {`${stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1).replace("pecial-attack", "p.Atk").replace("pecial-defense","p.Def")}${" "} `} 
                      <text className='textValue'>{`${" "} ${stat.base_stat} `}</text>
                      <Progress 
                      h={"10px"}
                      value={stat.base_stat}
                      className='Progress'
                      colorScheme={stat.base_stat < 50 ? "orange" : stat.base_stat < 80 ? "yellow" : "green"} 
                      // size='md' 
                      
                      borderRadius='4px' 
                      backgroundColor={'white'}
                      w='150px' 
                      // spacing='10px'
                      // border={"1px solid black"}
                      // marginLeft="0"
                      // paddingTop={"10px"}
                      />
                    </text>
                  )
                })}

                <text className='textTotal'>Total<text className='valueTotal'>{totalStats}</text></text>
                

              {/* </div> */}
            </div>
          </div>
          <div className='Div3'>
            <div className='Details'>
              {pokemonDetails.data && pokemonDetails.data.id <=9?
              <p className='idText'>#0{pokemonDetails.data && pokemonDetails?.data.id}</p>
              :
              <p className='idText'>#{pokemonDetails.data && pokemonDetails?.data.id}</p>
              }
              <p className='idName'>{pokemonDetails.data && pokemonDetails.data.name?.charAt(0).toUpperCase() + pokemonDetails.data.name?.slice(1)}</p>
              <div className='Types'>
                 <Image src={getTypesPokemon(type1)}></Image>
                 <Image src={getTypesPokemon(type2)}></Image>
              </div>
            </div>
            <div className='Moves'>
              <text>Moves:</text>
              {pokemonDetails.data && pokemonDetails.data.moves?.filter((move, index) => index < 4).map((move) => {
                return (
                  //   <WrapItem>
                  // <Center w='292px' h='292px' bg='blue.200'>
                  <label>{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}</label>
                  // </Center>
                  // </WrapItem>
                )
              })}
            </div>
          </div>
          <div className='Div4'>
            <img className='imgPokemonBig' src={pokemonDetails.data && pokemonDetails.data.sprites?.other["official-artwork"].front_default}></img>
            <img className='imgPokebola' src='../imgs/pokebolaBig.png'></img>
            

          </div>
        </Container>
        {/* <img className='imgPokebolaEB' src='../imgs/pokebolaEB.png'></img> */}

      </ContainerDetails>

    </>
  )
}

export default PageDetails