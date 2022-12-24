import React from 'react'
import Fundo2 from '../../assets/Fundo2.png'
import { BoxPrincipal, LadoEsquerdoDT, LadoDireitoDT, Img1, ImgCard2 } from './CardDetalhes.styled'
import { getColors } from '../utils/ReturnCardColor'
import { getTypes } from '../utils/ReturnPokemonType'
import { Stack, Progress } from '@chakra-ui/react'
import { ChakraProvider, Spinner } from '@chakra-ui/react'

const CardDetalhes = (props) => {
   const { details, typeDetalhes, typeDetalhes2, isLoading } = props
   return (
      <ChakraProvider>
         <BoxPrincipal color={getColors(details['types']['0']['type']['name'])}>
            <LadoEsquerdoDT>
               <div className='cardDuplos'>
                  <div className='cardFront'>
                     {isLoading ? <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                     /> : <img className='img_dupla' src={details['sprites']['versions']['generation-v']
                     ['black-white']['animated']['front_default']} />}
                  </div>
                  <div className='cardBack'>
                     {isLoading ? <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                     /> : <img className='img_dupla' src={details['sprites']['versions']['generation-v']
                     ['black-white']['animated']['back_default']} />}
                  </div>
               </div>

               <div className='progresso'>
                  <h1 className='titleBase'>Base Stats</h1>
                  {props.base.length > 1 &&
                     <Stack display='flex'>
                        <p className="progressoHP">HP <span className='numberBase'>{props.base["0"]['base_stat']}</span>
                           <Progress borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["0"]['base_stat']} />
                        </p>
                        <p className="progressoHP">Attack <span className='numberBase'>{props.base["1"]['base_stat']}</span>
                           <Progress borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["1"]['base_stat']} />
                        </p>
                        <p className="progressoHP">Defense <span className='numberBase'>{props.base["2"]['base_stat']}</span>
                           <Progress borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["2"]['base_stat']} />
                        </p>
                        <p className="progressoHP">Sp. Atk <span className='numberBase'>{props.base["3"]['base_stat']}</span>
                           <Progress borderRadius='4px' backgroundColor='white' colorScheme='yellow' size='md' value={props.base["3"]['base_stat']} />
                        </p>
                        <p className="progressoHP">Sp. Def <span className='numberBase'>{props.base["4"]['base_stat']}</span>
                           <Progress borderRadius='4px' backgroundColor='white' colorScheme='yellow' size='md' value={props.base["4"]['base_stat']} />
                        </p>
                        <p className="progressoHP">Speed <span className='numberBase'>{props.base["5"]['base_stat']}</span>
                        </p>
                        <Progress borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["5"]['base_stat']} />
                        <p className="progressoHP">Total
                           <span className='numberBase'>{props.base["0"]['base_stat'] +
                              props.base["1"]['base_stat'] +
                              props.base["2"]['base_stat'] +
                              props.base["3"]['base_stat'] +
                              props.base["4"]['base_stat'] +
                              props.base["5"]['base_stat']
                           }</span></p>
                     </Stack>

                  }
               </div>
            </LadoEsquerdoDT>
            <LadoDireitoDT>
               <Img1 src={Fundo2} />
               <div className='cardLadoEsquerdo'>
                  {details.id < 10 ? (<p>{"#0" + details.id}</p>) : (<p>{"#" + details.id}</p>)}
                  <h2>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h2>
                  <div className="types">
                     {typeDetalhes2.length > 1 && <>{<img src={getTypes(typeDetalhes2)} />}</>}
                     {typeDetalhes.length > 1 && <>{<img src={getTypes(typeDetalhes)} />}</>}</div>
                  <div className='moves'>
                     <h1 className='titleMove'>Moves:</h1>
                     {details && <span>{details['moves']['0']['move'].name}</span>}<br />
                     {details && <span>{details['moves']['1']['move'].name}</span>}<br />
                     {details && <span>{details['moves']['2']['move'].name}</span>}<br />
                     {details && <span>{details['moves']['3']['move'].name}</span>}
                  </div>
               </div>
               <div className='cardLadoDireito'>
                  <ImgCard2 src={details['sprites']['other']['official-artwork']['front_default']} />
               </div>
            </LadoDireitoDT>
         </BoxPrincipal>
      </ChakraProvider>
   )
}

export default CardDetalhes