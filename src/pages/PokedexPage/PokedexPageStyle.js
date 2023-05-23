import styled from "styled-components";

export const PokedexPageStyle = styled.main`

background-color: #5D5D5D;
display: flex;
flex-direction: column;
padding: 32px 24px 24px 32px;
color: #FFFFFF;

h1{
    font-family: 'Poppins';
    font-size: 36px;
    font-weight: bold;
    color: white;
    margin: 13px 0;
}
`

export const CardsSection = styled.section`

display: flex;
flex-direction: row;
gap: 40px;
flex-wrap: wrap;
padding-top: 40px;
`