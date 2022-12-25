import styled from 'styled-components'

export const MainHomePage = styled.div`
   width: 100%;
   height: 100%;
   background-color: #4A4A4A;
   padding: 50px 20px 80px 20px;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   gap:50px 20px;

   .btnTrocaPagina{
      border: 3px solid black;
      padding: 8px 26px;
      font-size: 20px;
      cursor: pointer;
      transition: .5s;
   }
   .btnTrocaPagina: hover{
      background-color: limegreen;
      color: white;
   }
   .buttonDuplo{
      margin-left: auto;
      width: 300px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background-color: #7A7A7A;
   }
`
export const TituloHome = styled.div`
   width: 100%;
   height: 120px;
   background-color: #4A4A4A;
   color: white;
   font-weight: bold;
   font-size: 28px;
   padding: 0 40px;
   display: flex;
   align-items: center;
`
export const ImgModalCapturar = styled.img`
   width: 451px;
   height: 222px;
`