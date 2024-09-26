import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Modal1, Modal2 } from '../components/modal'
import { Context } from '../context/createContext'
import './style.css'

export const Container = () => {
  const {showModalCapture, showModalDelete} = useContext(Context) 

  return (
    <div className='Container'>
      {showModalCapture && <Modal1 />}
      {showModalDelete && <Modal2 />}
      <div className='Header'>
        <Header />
      </div>
      <main className='Main'>
        <Outlet />
      </main>
    </div>
  )
}