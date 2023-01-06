import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 1440px;
   min-width: 1440px;
   margin: 0 auto;
`;

export const Buttons = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-left: 1105px;
   position: absolute;
   width: 220px;
`;

export const Button = styled.button`
   height: 50px;
   width: 100px;
   border-radius: 10px;
   border: 2px solid white;
   font-size: 15px;
   cursor: pointer;
   margin-left: 10px;
   margin-top: 10px;
   background-color: #F5F5F5;
   color: black;

   &:hover {
   background-color: #696969;
   color: white;
   }

   &:active {
   background-color: #33A4F5;
   color: white;
   }
`;

export const Section = styled.div`
   display: flex;
   min-height: 380px;
   flex-wrap: wrap;
   padding-left: 30px;
   padding-right: 30px;
   background-color: #7A7A7A;
`;

export const Title = styled.div`
   display: flex;
   height: 100px;
   max-width: 1440px;
   padding-top: 60px;
   padding-bottom: 130px;
   padding-left: 40px;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 72px;
   color: #FFFFFF;
   background-color: #7A7A7A;
`;

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

