import React, { useContext } from 'react'
import { Context } from '../../context/createContext/GlobalContext'


export const Detalhes = () => {
  const {detalhes} = useContext(Context)  
  return (
    <div>
      <h1>{detalhes.name}</h1>
    </div>
  )
}

