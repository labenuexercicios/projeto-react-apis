import React from 'react'
// import Fundo2 from '../../assets/Fundo2.png'
import {BoxPrincipal,LadoEsquerdoDT,LadoDireitoDT,Img1,ImgCard2} from './styled'
import { getColors } from '../../utils/getColors'
import { typesPokemon } from '../../utils/typesPokemon'
import { Stack, Progress } from '@chakra-ui/react'
import {ChakraProvider} from '@chakra-ui/react'
import Fundo2 from "../../assets/fundoDetalhes.png"

const CardDetalhes = (props) => {
  const {details,typeDetalhes,typeDetalhes2} = props
  return (
    <ChakraProvider>
    <BoxPrincipal color={getColors(details['types']['0']['type']['name'])}>
        <LadoEsquerdoDT>
           <div className='cardDuplos'>
              <div className='cardFront'>
                <img className='img_dupla' src={details.sprites.back_default}/>
              </div>
              <div className='cardBack'>
              <img className='img_dupla' src={details.sprites.front_default}/>
              </div>
           </div>

           <div className='progresso'>
            <h1 className='titleBase'>Base Stats</h1>
           {props.base.length > 1 && 
           <Stack paddingLeft={'100px'} spacing={'none'}>
            <div className="border">
            <p className="progressoHP">HP <span className='numberBase1'>{props.base["0"]['base_stat']}</span></p>
               <Progress maxWidth={'220px'} borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["0"]['base_stat']} />
            </div>
            <div className="border">
            <p className="progressoHP">Attack <span className='numberBase2'>{props.base["1"]['base_stat']}</span></p>
               <Progress maxWidth={'220px'} borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["1"]['base_stat']} />
               </div>
               <div className="border">
            <p className="progressoHP">Defense <span className='numberBase3'>{props.base["2"]['base_stat']}</span></p>
               <Progress maxWidth={'220px'} borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["2"]['base_stat']} />
               </div>
               <div className="border">
            <p className="progressoHP">Sp. Atk <span className='numberBase4'>{props.base["3"]['base_stat']}</span></p>
               <Progress maxWidth={'220px'} borderRadius='4px' backgroundColor='white' colorScheme='yellow' size='md' value={props.base["3"]['base_stat']} />
               </div>
               <div className="border">
            <p className="progressoHP">Sp. Def <span className='numberBase5'>{props.base["4"]['base_stat']}</span></p>
               <Progress maxWidth={'220px'} borderRadius='4px' backgroundColor='white' colorScheme='yellow' size='md' value={props.base["4"]['base_stat']} />
               </div>
               <div className="border">
            <p className="progressoHP">Speed <span className='numberBase6'>{props.base["5"]['base_stat']}</span></p>
            <Progress maxWidth={'220px'} borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["5"]['base_stat']} />
            </div>
            <p className="progressoHP">Total
            <span className='numberBase7'>{props.base["0"]['base_stat']+
              props.base["1"]['base_stat']+
              props.base["2"]['base_stat']+
              props.base["3"]['base_stat']+
              props.base["4"]['base_stat']+
              props.base["5"]['base_stat']
              }</span></p>
           </Stack>

        }
           </div>
        </LadoEsquerdoDT>
        <LadoDireitoDT>
            <Img1 src={Fundo2}/>
            <div className='cardLadoEsquerdo'>
             {details.id < 10 ? (<p>{"#0"+details.id}</p>):(<p>{"#"+details.id}</p>)}
             <h2>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h2>
             <div className="types">
             {typeDetalhes2.length > 1 && <>{<img src={typesPokemon(typeDetalhes2)}/>}</>}
             {typeDetalhes.length > 1 && <>{<img src={typesPokemon(typeDetalhes)}/>}</>}</div>
            <div className='moves'>
             <h3 className='titleMove'>Moves:</h3>
             {details && <span>{details['moves']['0']['move'].name}</span>}<br/>
             {details && <span>{details['moves']['1']['move'].name}</span>}<br/>
             {details && <span>{details['moves']['2']['move'].name}</span>}<br/>
             {details && <span>{details['moves']['3']['move'].name}</span>}
            </div>
            </div>
            <div className='cardLadoDireito'>
                <ImgCard2 src={details['sprites']['other']['official-artwork']['front_default']}/>
            </div>
        </LadoDireitoDT>
    </BoxPrincipal>
    </ChakraProvider>
  )
}

export default CardDetalhes
