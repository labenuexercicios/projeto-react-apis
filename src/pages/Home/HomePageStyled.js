import styled from "styled-components";

export const HomePageContainer = styled.div`
    color: white;
    font-family: "Poppins";
    background-color: #5E5E5E;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h1{
        padding: 30px 0 0 30px;
    }
`


export const AllPokemons = styled.div`
    display: flex;
    row-gap: 60px;
    column-gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`