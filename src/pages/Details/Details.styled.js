import styled from "styled-components";

export const Container = styled.div`
   max-width: 1440px;
   margin: 0 auto;
   min-height: 850px;
   max-height: 850px;
   margin: 0 auto;
   padding: 25px;
   background-color: #7A7A7A;
   display: flex;
   flex-direction: column;
`
export const TitleDetails = styled.div`
   display: flex;
   width: 220px;
   height: 72px;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 72px;
   color: #FFFFFF;
   margin-top: 40px;
   margin-bottom: 40px;
   margin-left: 40px;
`

export const ModalCapture = styled.div`
   width: 451px;
   height: 222px;
   display : flex;
   flex-direction: column;
   align-items: center;
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