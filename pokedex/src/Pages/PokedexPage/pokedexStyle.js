import styled from "styled-components";


export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
  background-color: #5E5E5E;
  width: 100vw;
  position: absolute;
  top:20em;
`;
export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: #FFFFFF;
  padding: 1em;
  background-color: #5E5E5E;
  position: absolute;
  top: 4em;
  width:100%;
`