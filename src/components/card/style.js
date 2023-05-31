import styled from "styled-components";


export const Container = styled.div`
  padding: 1rem;
  min-width: 25rem;
  max-width: 27.5rem;
  background-color: ${(props) => props.color};
  border-radius: 0.75rem;
  display: flex;
  position: relative;
  margin: 3.125rem;
  
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 37.5rem;
  text-align: left;
  
`;

export const PokemonName = styled.h1`
  font-size: 2rem;
  font-weight: 43.75rem;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0.625rem;
  color:"white";
  font-family: "Inter", sans-serif;
`;

export const PokemonType = styled.img`
  max-width: 6.25rem;
  height: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 0.063rem dashed #ffffff;
  margin-right: 0.5rem;
  z-index: 2;
`;

export const TypesContainer = styled.div`
  margin-bottom: 3.25rem;
  display:flex;

`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 16rem;
  z-index: 0;
  
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.625rem;
  width: 9.125rem;
  height: 2.375;
  background: #ffffff;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0.625rem;
  right: 1.375rem;
  z-index: 2;
  color: #000;
  font-family:"Poppins";
  font-size:1rem;
  font-size:1rem;
`;

export const Pokemon = styled.img`
  width: 12.063rem;
  height: 12.063rem;
  position: absolute;
  top: -3.75rem;
  right: 0;
  z-index: 2;
`;
