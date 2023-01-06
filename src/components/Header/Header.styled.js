import styled from "styled-components";

export const Container = styled.header`
  max-width: 1440px;
  margin: 0 auto;
  height: 160px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
`;

export const GridAHome = styled.div`
  margin-top: 62px;
  width: 500px;
  position: absolute;
`;

export const AllPokemons = styled.a`
  width: 210px;
  height: 36px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-left: 100px;
  text-decoration-line: underline;
  cursor: pointer;
  color: #1A1A1A;
`;

export const GridLogo = styled.div`
   position: relative;
   left: 566px;
   top: 21px;
`;

export const ImgLogo = styled.img`
   width: 307px;
   height: 113px;
`

export const GridButtonHome = styled.div`
   display: flex;
   position: absolute;
`;

export const ButtonHomePage = styled.button`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   position: absolute;
   
   font-family: 'Poppins', sans-serif;
   font-size: 24px;

   width: 287px;
   height: 74px;
   left: 1112px;
   top: 41px;

   color: white;
   background: #33A4F5;
   border-radius: 8px;
   border: white;
   cursor: pointer;
   padding: 4px 10px;
`;

export const ButtonRemove = styled.button`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   position: relative;

   width: 226px;
   height: 57px;
   left: 410px;
   margin: 0 auto;
   top: 51px;

   background: #FF6262;
   border-radius: 8px;
   color: #FFFFFF;
   padding: 4px 10px;

   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
`;

export const ButtonAdd = styled.button`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   position: relative;

   width: 226px;
   height: 57px;
   left: 410px;
   margin: 0 auto;
   top: 41px;

   background: #33A4F5;
   border-radius: 8px;
   padding: 4px 10px;
   
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 24px;
   color: #FFFFFF;
`
