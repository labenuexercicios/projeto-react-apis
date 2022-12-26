import React from 'react'
import Ash from '../../assets/Ash.jpg'
import styled from 'styled-components'
import Header from '../Header/Header'

const DivPrincipal = styled.div`
    width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: black;
    gap: 15px;
    margin-top: 20px;

    img{
        width: 400px;
        height: 60vh;
        margin: 0 auto;
    }
    h1{
        font-size: 50px;
        color: white;
        text-align: center;
        margin-top: 15px;
    }
`
const NotFoundPage = () => {
  return (
    <>
    <Header isNotFound={true}/>
    <DivPrincipal>
        <h1>Página não encotrada</h1>
        <img src={Ash}/>
    </DivPrincipal>
    </>
  )
}

export default NotFoundPage