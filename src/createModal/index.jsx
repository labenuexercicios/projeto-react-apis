import React, { useContext } from 'react'
import ReactDOM  from 'react-dom'
import { Context } from '../context/createContext'
import './style.css'

const Backdrop = () => {
  const {setShowModalCapture, setShowModalDelete} = useContext(Context)

  const closeModal = () => {
    setShowModalCapture(false)
    setShowModalDelete(false)
  }

  return <div className='backdrop' onClick={() => closeModal()}></div>
}

const ModalOverlay = ({children}) => {
  return (
  <div className='modal'>
    <div>{children}</div>
  </div>
  )
}

const portalOverlays = document.getElementById('overlays')

export const CreateModal = ({children}) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, portalOverlays)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalOverlays)}
    </div>
  )
}