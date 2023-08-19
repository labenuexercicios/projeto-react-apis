import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Header from "../components/Header"
import { BASE_URL } from '../constants/url';
import axios from "axios"
import { goToHomePage } from '../routes/coordinators';
import imgBulbasaurFrente from "../imagens/imgBulbasaurFrente.png"
import imgBulbasaurCosta from "../imagens/imgBulbasaurCosta.png"
import grafico from "../imagens/grafico.png"
import imgDetalhes4Grande from "../imagens/imgDetalhes4-grande.png"
import imgDetalhes5 from "../imagens/imgDetalhes5.png"
import imgDetalhesTipo1 from "../imagens/imgDetalhes-tipo1.png"
import imgDetalhesTipo2 from "../imagens/imgDetalhes-tipo2.png"
import imgDetalhesTipo3 from "../imagens/imgDetalhes-tipo3.png"
import imgDetalhesTipo4 from "../imagens/imgDetalhes-tipo4.png"
import cardAzul from "../imagens/cardAzulDetalhes.png"
import imagemBulbassauro from "../imagens/imagemBulbassau.png"
import imagemBola from "../imagens/pokeBola2.png"
import imagemTipo from "../imagens/tipo.png"
import imagemTipo2 from "../imagens/tipo2.png"
import imgMoves from "../imagens/imgMoves.png"


const DetlhesCardConteiner = styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
width: 100%;
height: 590px;
background: #729F92;
border-radius: 12px;

//margin-bottom:40px;


.divLadoesquerdo{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width: 50%;
    padding:26px 34px 26px 44px ;
    gap: 16px;    

div{
    display: flex;
    flex-direction:column;
    justify-content: space-between;   
   }    
   
}
  .posicaoGrafico{ 
    width: 300px;
    height: 100%;
    background-color:white;
    border-radius:8px;
    padding:19px 18px;
  }
  /* .imgDetalhes4Grande{
    position:absolute;
    z-index:10;

  } */
  /* .grafico{    
    z-index:11;
  } */

  .ladoDireito{
    position:relative;
    width: 50%;   
    padding:26px 44px 26px 34px;
  }  
.divBulbasaur{
position: absolute;
width: 270px;
height: 270px;
right:12px;
top: -52px;
z-index:1;


}
.bolaPoke{
position: absolute;
width: 100%;
height: 100%;
z-index:0;
/* top: 0; */
}

.tiposDetalhes{
    display: flex;
    flex-direction: column;    
    color:white;    
    font-weight:700;
    position: absolute;
    top:26px;
    z-index: 1;
   
    div{
      display: flex;
      gap: 8px;
    }
    p{
      font-size:16px;
    }
    h2{
      font-size:48px;
    }
     
}
.move{
  display: flex;
  position: absolute;
  flex-direction: column;
  background-color:white;
  border-radius:10px;
  width:40% ;
  height: 65%;
  gap:20px;
  padding: 16px;
  bottom: 26px;
  z-index: 1;
  
  /* .imgMoves{
    margin-bottom:16px
  } */

   span{
    background-color:lightgrey;
    border: 2px dashed black;
    border-radius:10px;
    padding:6px;
    width: 60%;
    }
    h1{
      font-size:30px;
      font-weight:bolder;
    }

}
`
const MainStyled = styled.main`
width: 100vw;
height: calc(100vh-160px); /* menos a altura de header */
padding:0 26px;

`

 const DetalhesPage = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [detalhes, setDetalhes] = useState({})
  const [isLoading, setIsloading] = useState({})
  
  useEffect(() => {
    fetchDetalhes()
}, [])

const fetchDetalhes = async () => {
  try{
    setIsloading(true)

     const config = {
      headers: {
        Authorization: window.localStorage.getItem("pokemon-token")
      }

     }
     const response = await axios.get(
      `${BASE_URL}/detalhes/${params.namePokemon}`,
      config
     )
     setDetalhes(response.data)
     setIsloading(false)
  }catch(error){
    console.log(error)
    setIsloading(false)
  }
}
  console.log(isLoading)






  return (
    <>
      <Header isDetalhes={true} isPokedex={true}/>
      
<MainStyled>
      <DetlhesCardConteiner >

        <div className='divLadoesquerdo'>
          <div >

            <div className='ladoEsquerdo1'>
              {/* img Bulbasaur frente, img Bulbasaur costa, */}
              <img className='imgBulbasaurFrente' src={imgBulbasaurFrente} />
            </div>

            <div className='ladoEsquerdo2'>
              <img className='imgBulbasaurCosta' src={imgBulbasaurCosta} />
            </div>
          </div>

          <div className='posicaoGrafico'>
            <img className='imgDetalhes4Grande' src={imgDetalhes4Grande} />
            <img className='grafico' src={grafico} />
          </div>

        </div>


        <div className='ladoDireito'>
        <img className='bolaPoke' src={imagemBola} />

          <div className='divBulbasaur'>
           
            <img className='imgBulba' src={imagemBulbassauro} />
            
          </div>

          <div className='tiposDetalhes'>
            <p>#01</p>
            <h2>Bulbasaur</h2>
            <div>
              <img className='tipo1' src={imagemTipo} />
              <img className='tipo2' src={imagemTipo2} />
            </div>


          </div>
        
        <div className='move'>
          <h1>Moves</h1>
          <span> Razor Wind</span>
          <span> Shord Dance</span> 
          {/* fazer um map p ele replicar */}

          {/* <img className='imgDetalhesTipo4' src={imgDetalhesTipo4} />
          <img className='imgMoves' src={imgMoves} />
          <img className='imgDetalhesTipo1' src={imgDetalhesTipo1} />
          <img className='imgDetalhesTipo2' src={imgDetalhesTipo2} />
          <img className='imgDetalhesTipo3' src={imgDetalhesTipo3} /> */}
        </div>


        </div>

        {/* pokemon={pokemon}
        removeFromPokedex={removePokedex} */}

      </DetlhesCardConteiner >


      </MainStyled>

     
    </>
  )
  
 }

export default DetalhesPage