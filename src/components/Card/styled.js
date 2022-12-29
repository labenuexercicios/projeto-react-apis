import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.cardColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 210px;
  border-radius: 12px;
  margin-bottom: 60px;
  margin-left: 10px;
  margin-right: 10px;
  


  button {
    width: 50%;
    height: 40px;
  }

`;

export const PokemonType = styled.img`
  display: flex;
  width: 91px;
  height: 31px;
  left: 129px;
  top: 89px;
`;

export const Superior = styled.div`
  display: flex;
  flex-direction: row;
  width: 440px;
  margin-left: 40px;
`;

export const Nome = styled.div`
  width: 116px;
  height: 39px;
  left: 23px;
  top: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #FFFFFF;
`;

export const Id = styled.span`
  width: 32px;
  height: 19px;
  left: 23px;
  top: 25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`;

export const DireitoCard = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column; 
`;

export const Img = styled.img`
  min-width: 193px;
  min-height: 193px;
  max-width: 193px;
  max-height: 193px;
  position: relative;
  top: -70px;
  left: 25px;
  z-index: 1;
`;

export const ImgPoke = styled.img`
  width: 240px;
  height: 210px;
  position: relative;
  bottom: 206px;
  right: 15px;
  z-index: 0;
`;

export const LadoEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
  width: 82px;
  height: 31px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 180px;
  width: 420px;
  margin-top: 12px;
`;

export const Detalhes = styled.a`
  width: 74px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-top: 12px;
  margin-left: 10px;
  text-decoration-line: underline;
  cursor: pointer;
  color: #FFFFFF;
`;

export const ButtonCapturar = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  margin-right: 10px;
  background: #FFFFFF;
  border: white;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  z-index: 1;
`;

export const ButtonRemover = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  margin-right: 10px;
  background: #FF6262;
  color: #FFFFFF;
  border: #FFFFFF;
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  z-index: 1;
`;


