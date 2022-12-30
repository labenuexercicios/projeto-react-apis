import React, { useEffect, useState } from 'react'
import Header from '../../componentes/Header/Header'
import DetalhesStyle from './Detalhes.Style'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { cores } from "../../utilitarios/Cores"
import { ImgTipo } from '../../utilitarios/Tipo'
import { Text, Image, Stack, } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import pokeBola from "../../imagens/pokeBola.png"
const Detalhes = () => {

  const params = useParams()

  const [detalhes, setDetalhes] = useState([])




  useEffect(() => {
    informacoes()
  }, [])

  const informacoes = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.nomePokemon}`)
      .then((res) => {
        setDetalhes(res)

      })
      .catch((err) => {
        console.log(err)
      })
  }
  console.log(detalhes)
  return (
    <ChakraProvider>
      <Header />
      <DetalhesStyle color={() => cores(detalhes.data?.types[0].type.name)}>
        <div className='margem-total'>
          <h1>Detalhes</h1>
          <div className='super-card'>
            <div className='duas-imagens'>

              <div className='ivissauro-frente'>

                <div className='centraliza-superior'>
                  <img src={detalhes.data?.sprites?.front_default} ></img>
                </div>
              </div>

              <div className='ivissauro-tras'>
                <div className='centaliza-inferior'>
                  <img src={detalhes.data?.sprites?.back_default}></img>
                </div>
              </div>

            </div>

            <div className='grafico'>

              <Stack spacing={"-5px"} paddingLeft={"36px"}>
                <Text fontSize={'24px'} marginTop={'18px'} marginBottom={'24px'} fontWeight={'700'} fontFamily={'Inter'}>
                  Base Stats</Text>

                <div className='box-individual'>
                  <span> {detalhes.data?.stats[0].stat.name}:</span>
                  <span>{detalhes.data?.stats[0].base_stat}</span>

                  <Progress
                    spacing='10px'
                    size='md'
                    borderRadius="8px"
                    bg='white'
                    // colorScheme={'value' < 50 ? 'orange' : 'value' < 80 ? 'yellow' : 'green'}
                    width={'24vw'}
                    value={detalhes.data?.stats[0].base_stat}
                  />
                </div>
                <div className='box-individual'>
                  <span >{detalhes.data?.stats[1].stat.name}:</span>
                  <span>{detalhes.data?.stats[1].base_stat}</span>
                  <Progress
                    spacing='10px'
                    size='md'
                    borderRadius="8px"
                    bg='white'
                    width={'24vw'}
                    colorScheme={'value' < 50 ? 'orange' : 'value' < 80 ? 'yellow' : 'green'}
                    value={detalhes.data?.stats[1].base_stat}
                  />
                </div>
                <div className='box-individual'>
                  <span >{detalhes.data?.stats[2].stat.name}:</span>
                  <span>{detalhes.data?.stats[2].base_stat}</span>
                  <Progress spacing='10px'
                    size='md'
                    borderRadius="8px"
                    bg='white'
                    width={'24vw'}
                    colorScheme={'value' < 50 ? 'orange' : 'value' < 80 ? 'yellow' : 'green'}
                    value={detalhes.data?.stats[2].base_stat}
                  />
                </div>
                <div className='box-individual'>
                  <span >{detalhes.data?.stats[3].stat.name}:</span>
                  <span>{detalhes.data?.stats[3].base_stat}</span>
                  <Progress spacing='10px'
                    size='md'
                    borderRadius="8px"
                    bg='white'
                    width={'24vw'}
                    colorScheme={'value' < 50 ? 'orange' : 'value' < 80 ? 'yellow' : 'green'}
                    value={detalhes.data?.stats[3].base_stat}
                  />
                </div>
                <div className='box-individual'>
                  <span >{detalhes.data?.stats[4].stat.name}:</span>
                  <span>{detalhes.data?.stats[4].base_stat}</span>
                  <Progress spacing='10px'
                    size='md'
                    borderRadius="8px"
                    bg='white'
                    width={'24vw'}
                    colorScheme={'value' < 50 ? 'orange' : 'value' < 80 ? 'yellow' : 'green'}
                    value={detalhes.data?.stats[4].base_stat}
                  />
                </div>
                <div className='box-individual'>

                  <span >{detalhes.data?.stats[5].stat.name}:</span>
                  <span>{detalhes.data?.stats[5].base_stat}</span>
                  <Progress spacing='10px'
                    size='md'
                    borderRadius="8px"
                    bg='white'
                    width={'24vw'}
                    colorScheme={'value' < 50 ? 'orange' : 'value' < 80 ? 'yellow' : 'green'}
                    value={detalhes.data?.stats[5].base_stat} />
                </div>
                <div className='total'>
                <p>Total: </p><span>{detalhes.data?.stats[0].base_stat +
                  detalhes.data?.stats[1].base_stat +
                  detalhes.data?.stats[2].base_stat +
                  detalhes.data?.stats[3].base_stat +
                  detalhes.data?.stats[4].base_stat +
                  detalhes.data?.stats[5].base_stat}
                </span>
                </div>
              </Stack>

            </div>
            <div className='componente-final'>
              <div className='pokebola'>
                  <img src={pokeBola} alt='pokebola'></img>
              </div>

              <div >
                <div className='inicio'>
                  {detalhes.data?.id <= 9 ? <p>#0{detalhes.data?.id}</p> : <p>#{detalhes.data?.id}</p>}

                  <h2>{detalhes.data?.name.charAt(0).toUpperCase() + detalhes.data?.name.slice(1)}</h2>
                </div>
                <div className='tags-coloridas'>

                  {detalhes && <Image src={ImgTipo(detalhes.data?.types[0].type.name)}></Image>}
                  {detalhes.data?.types[1] && <Image src={ImgTipo(detalhes.data?.types[1].type.name)}></Image>}
                </div>
                <div>
                  <Image className='bulbassauro' src={detalhes.data?.sprites?.other['official-artwork'].front_default} />
                </div>
              </div>
              <div className='parte-inferior'>
                <div className='margem'>
                  <p>Moves</p>
                  <div className='tags'>
                    <div className='cor-de-fundo'><span>{detalhes.data?.moves[0].move?.name}</span></div>
                    <div className='cor-de-fundo'><span>{detalhes.data?.moves[1].move?.name}</span></div>
                    <div className='cor-de-fundo'> <span>{detalhes.data?.moves[2].move?.name}</span></div>
                    <div className='cor-de-fundo'><span>{detalhes.data?.moves[3].move?.name}</span></div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </DetalhesStyle>

    </ChakraProvider >
  )
}

export default Detalhes