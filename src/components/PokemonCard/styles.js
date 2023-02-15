import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 480px;
  min-height: 200px;
  max-height: 250px;
  background-color: ${((props)=>props.backColors)};
  border-radius: 12px;
  position: relative;
  margin: 50px;
  color: #ffffff;

 a{
  width: 74px;
height: 24px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color:  #FFFFFF;
/* identical to box height */

text-decoration-line: underline;
 }



  `
;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;`
;

export const PokemonName = styled.h1`
text-transform: capitalize;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;`
;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;`
;

export const TypesContainer = styled.div`
  margin-bottom: 52px;`
;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;`
;

export const DetalsButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 21vh;
  height: 5vh;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px; 
  top: 138px;
  right: 22px;
  z-index: 2;
  color: #000;
  font-family: 'Poppins', sans-serif;
  
  `
;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 21vh;
  height: 5vh;
  background: ${(props) => props.background};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 9px;
  right: 22px;
  z-index: 2;
  color:  ${(props) => props.color};
  font-family: 'Poppins', sans-serif;`
;

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;`
;