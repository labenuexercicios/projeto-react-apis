import styled from "styled-components";
import ball from "../../icons/pokeball.svg";

export const CardContainer = styled.div`
  width: 430px;
  height: 210px;
  border-radius: 12px;
  display: flex;
  color: white;
  background-color: ${(props) => props.colorCard};
  background-image: url(${ball});
  background-size: 50% auto;
  background-repeat: no-repeat;
  background-position: top right;
  font-weight: bold;

  button {
    width: 146px;
    height: 38px;
    border-radius: 8px;
    border: none;
    font-family: "Poppins";
    font-size: 16px;
    background-color: white;
    margin-left: 250px;
    margin-top: -30px;
    cursor: pointer;
  }
`;

export const Name = styled.div`
  padding-left: 17px;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    font-family: "Inter";
  }

  h2 {
    margin: 15px 0;
    font-family: "Inter";
    font-size: 28px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;
export const Types = styled.div`
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    gap: 5px;
  }
  a{
    font-family: "Inter";
        font-weight: bold;
        text-decoration-line: underline;
        padding-top: 30px;
        cursor: pointer;
  }
`;

export const ImagemPokemon = styled.img`
  position: absolute;
  width: 193px;
  height: 193px;
  margin-top: -50px;
  margin-left: 240px;
`;

export const ImgButton = styled.div`
  display: flex;
  flex-direction: row;
`;
