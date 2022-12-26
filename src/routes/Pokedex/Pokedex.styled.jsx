import styled from 'styled-components'

export const MainPokedex = styled.div`
width: 100%;
height: 100%;
background-color: #4A4A4A;
padding: 50px 20px 80px 20px;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap:50px 20px;
`
export const TituloPokedex = styled.div`
    width: 100%;
    height: 120px;
    background-color: #4A4A4A;
    color: white;
    font-weight: bold;
    font-size: 28px;
    padding: 0 40px;
    display: flex;
    align-items: center;

    h1{
        margin-left: 30px;
    }
    .excluirTodos{
        background-color:#FF6262;
        margin-left: auto;
        color: white;
        width: 190px;
        height: 70px;
        font-size: 22px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
    }
`
export const ModalRemover = styled.div`
   width: 451px;
   height: 222px;
   display : flex;
   flex-direction: column;
   algin-items: center;
    justify-content: center;

  h1{
     font-size: 48px;
     text-align: center;
    }
  p{
     font-size: 16px;
     font-weight: 700;
     text-align: center;
   }
`