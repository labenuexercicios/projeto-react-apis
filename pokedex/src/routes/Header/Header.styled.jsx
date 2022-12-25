import styled from 'styled-components'

export const HeaderPage = styled.div`
    width: 100%;
    height: 160px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 0 50px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`
export const GridLogo = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`
export const GridButtonPokedex = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   .pageJogo{
      font-size: 100px;
      cursor: pointer;
      padding-bottom: 20px;
   }
`
export const GridButtonHome = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`
export const ImgLogo = styled.img`
    width: 200px;
    height: 80px;
`
export const ImgLogo2 = styled.img`
    width: 200px;
    height: 80px;
`
export const ButtonPokedex = styled.a`
   background-color: #FFFFFF;
   border-bottom: 2px solid black;
   font-weight: bold;
   font-size:24px;
   cursor: pointer;
`
export const ButtonHomePage = styled.button`
   background-color: #33A4F5;
   color: #FFFFFF;
   font-weight: bold;
   font-size: 24px;
   width: 287px;
   height: 74px;
   border-radius: 8px;
   border: none;
   cursor: pointer;

`
export const ButtonHomePage2 = styled.button`
   background-color: limegreen;
   color: #FFFFFF;
   font-weight: bold;
   font-size: 24px;
   width: 287px;
   height:74px;
   border-radius: 8px;
   border: none;
   cursor: pointer;

`
export const ButtonDetalhes = styled.button`
   background-color: #FF6262;
   color: #FFFFFF;
   font-weight: bold;
   font-size: 17px;
   width: 227px;
   height: 57px;
   border-radius: 4px;
   border: none;
   cursor: pointer;
`
