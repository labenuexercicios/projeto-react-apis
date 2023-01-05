import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage } from '../../router/coordinator'

const HomePage = () => {
    const navigate=useNavigate()
  return (
    <div>homePage
        <button onClick={()=>goToDetailsPage(navigate)}>Details Page</button>
    </div>
  )
}

export default HomePage