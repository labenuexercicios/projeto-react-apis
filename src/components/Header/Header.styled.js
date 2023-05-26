import styled from "styled-components";

export const ContainerHeader = styled.header`
    height: 18vh;
    background-color: white;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
`
export const AllPokemons = styled.div`
    display: flex;
    gap: 10px;
    grid-column: 1/2;
`
export const LinkReturn = styled.div`
    font-size: 24px;
    font-family:'Poppins', sans-serif;
    font-weight: 700; 
    cursor: pointer;
`
export const ImageLogo = styled.img`
    grid-column: 2/3; 
    width: 17vw;
    cursor: pointer;
`
export const ButtonHeader = styled.button`
    grid-column: 3/4;
    background-color: #33A4F5;
    width: 17vw;
    height: 8vh;
    font-size: 24px;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 36px;
    color: #FFFFFF;
`