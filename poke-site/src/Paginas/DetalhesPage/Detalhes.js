import React from 'react'
import Header from '../../componentes/Header/Header'
import DetalhesStyle from './Detalhes.Style'
import ivissaurFrente from "../../imagens/Ivissaur-frente.png"
import ivissaurTras from "../../imagens/ivissaur-tras.png"
import grafico from "../../imagens/grafico.png"
import bulbassauro from "../../imagens/bulbassauro.png"
import pokeBola from "../../imagens/pokeBola.png"
import tagCut from "../../imagens/tagCut.png"
import tagVine from "../../imagens/tagVine.png"
import tagRasor from "../../imagens/tagRasor.png"
import tagSword from "../../imagens/tagSword.png"
import tagGrass from "../../imagens/tagGrass.png"
import tagPoison from "../../imagens/tagPoison.png"

const Detalhes = () => {

  // const informacao = ()=>{
  //   axios.get()
  // }
  return (
    <>
      <Header />
      <DetalhesStyle >
        <div className='margem-total'>
          <h1>Detalhes</h1>
          <div className='super-card'>
            <div className='duas-imagens'>
              <div className='ivissauro-frente'>
                <img src={ivissaurFrente}></img>
              </div>
              <div className='ivissauro-tras'>
                <img src={ivissaurTras}></img>
              </div>
            </div>
            <div className='grafico'>
              <img src={grafico}></img>
            </div>
            <div className='componente-final'>

              <div >
                <div className='inicio'>
                  <p>#01</p>
                  <h2>Ivissaur</h2>
                </div>
                <div className='tags-coloridas'>
                  <img src={tagPoison}></img>
                  <img src={tagGrass}></img>
                </div>
                <div>
                  <img className='bulbassauro' src={bulbassauro}></img>
                  {/* <img className='pokebola' src={bulbassauro}></img> */}
                </div>
              </div>
              <div className='parte-inferior'>
                <div className='margem'>
                  <p>Moves:</p>
                  <div className='tags'>
                    <img src={tagRasor}></img>
                    <img src={tagSword}></img>
                    <img src={tagCut}></img>
                    <img src={tagVine}></img>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </DetalhesStyle>

    </>
  )
}

export default Detalhes