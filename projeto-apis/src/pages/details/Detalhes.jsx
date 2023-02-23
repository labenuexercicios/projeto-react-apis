import React, { useContext } from 'react'
import { Context } from '../../context/createContext/GlobalContext'
import { ContainerDetalhes, ContainerInformaçoes, H1 } from './styled'
import {Tipos} from '../../utils/Types'
export const Detalhes = () => {
  const {detalhes,pokemons1} = useContext(Context)  
  console.log(detalhes.stats)

   
  return (
    <ContainerInformaçoes>
      
      {/* <H1>Detalhes</H1> */}
      
    <div className='front'>
      <img src={detalhes.sprites !== undefined && detalhes.sprites['front_default']} />
    </div>

    <div className='back'>
      <img src={detalhes.sprites !== undefined && detalhes.sprites['back_default']} />
    </div>

  <div className='basestats'>
      <ul className='stats'>
        <p>Base Stats:</p>
    {detalhes.stats !== undefined && detalhes.stats.map((stats)=>{
      return (
        
        <li>{stats.stat.name}: {stats.base_stat}<p/></li>
      )
    })}
     </ul>
     </div>
     <div className='id'>
      #{detalhes.id}
      </div>
      <p/>
      <div className='Name'>
      {detalhes.name}
      </div>
      <p/>
      <div>
      <span className='tipo1'>{Tipos(detalhes.types !== undefined && detalhes.types[0].type.name)}</span>
      <span className='tipo2'>{Tipos(detalhes.types !== undefined && detalhes.types[1]?.type.name)}</span>
     </div>
     <div>
      <img className='imagenPrincipal' src={detalhes.sprites?.other?.["official-artwork"]?.["front_default"]}/>
     </div>
     
    <ContainerDetalhes>
      <div className='Moves'>
        <h1>Moves</h1>
        <span className='text'>{detalhes.moves !== undefined && detalhes.moves[0].move.name}</span><p/>
        <span className='text'>{detalhes.moves !== undefined && detalhes.moves[1].move.name}</span><p/>
        <span className='text'>{detalhes.moves !== undefined && detalhes.moves[2].move.name}</span><p/>
        <span className='text'>{detalhes.moves !== undefined && detalhes.moves[3].move.name}</span>
      </div>
    </ContainerDetalhes>
    </ContainerInformaçoes>
  )
}