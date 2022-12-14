import styled from "styled-components";

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    // width: 100%;
    // height: 160px;
`
export const LogoImg = styled.img`
    max-width: 307px;
    margin: 21px 0 26px 0;
`
export const PokedexButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    height: 50px;
    width: 250px;
    font-size: 20px;
    font-family: helvetica;
    background: transparent;
    border: none;
    cursor: pointer;
`
export const PokedexImg = styled.img`
    height: 40px;
`
export const BlankSpace = styled.div`
    width: 250px;
    height: 50px;
`
export const DeleteButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 8px;
  background: #FF6262;
  border: none;
`;