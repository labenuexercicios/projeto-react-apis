import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-width: 1440px;
  margin: 0 auto;
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
  width: 1440px;
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

export const ModalRemove = styled.div`
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