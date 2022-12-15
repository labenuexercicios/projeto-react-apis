import styled from 'styled-components'
import React from 'react'
import imagemBulbassauro from "../../imagens/imagemBulbassau.png"
import imagemBola from "../../imagens/pokeBola.png"
import imagemTipo from "../../imagens/tipo.png"
import imagemTipo2 from "../../imagens/tipo2.png"
import { Button } from '@chakra-ui/react'
import {gotoDetalhesPage} from "../../routes/coordinators"
import { useNavigate } from 'react-router-dom'

const PokemonCardConteiner = styled.div`
display: flex;
flex-direction:row-reverse;
justify-content: space-between;
position: relative;
width: 440px;
height: 210px;
left: 0px;
top: 0px;
background: #729F92;
border-radius: 12px;
margin-bottom:40px;


.imgBulba{
position: absolute;
width: 193px;
height: 193px;
right:12px;
top: -52px;
z-index:1;
}
.bolaPoke{
position: absolute;
width: 250.73px;
height: 210.73px;
right: 0;
top: 0;
}
.ladoEsquerdo{
    display: flex;
    flex-direction:column;
    margin-left:24px;
    margin-top:24px;
    margin-bottom:20px;
    p{
        font-size:16px;
        color:white; 
}

h2{
    color:white;
    font-size:32px;
    font-weight:700;
}
}
.tipos{
    display: flex;
    gap:8px;       
}
.detalhes{
    margin-top:auto;
    font-weight:700;
    text-decoration:underline;

}
.ladoDireito{  
    Button{
    margin-top:158px;
    margin-bottom:13px; 
    margin-right:22px;   
    } 
   
}
` 

const PokemonCard = () => {    

      const navigate = useNavigate()

  return (
    <PokemonCardConteiner>
        <div className='ladoDireito'> 
            {/* //img Bulbasaur, img pokeBola, botão de capturar */}
            <img className='imgBulba' src = {imagemBulbassauro} />
            <img className='bolaPoke' src = {imagemBola } />   
            <Button>Capturar</Button>

        </div>

        <div className='ladoEsquerdo'> 
            {/* //#1, Bulbasaur, os tipos, detalhes */}
            <p>#01</p>
            <h2>Bulbasaur</h2>
            <div className='tipos'>
            <img className='tipo1' src = {imagemTipo} />
            <img className='tipo2' src = {imagemTipo2} />
            </div>
            < Button onClick={()=>gotoDetalhesPage(navigate,"Bulbauro")}  className='detalhes'>Detalhes</Button>

        </div>  
       
    </PokemonCardConteiner>   

  )
}

export default PokemonCard

