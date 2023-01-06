import styled from "styled-components";

export const PokemonListPageContainer = styled.div`

    background-color:#5E5E5E;
    color:white;
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    font-family: 'Poppins', sans-serif;
    
    .container-card{
        width: 2000px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        padding-left:40px;   
    }

    .h1-pokedex-list{
        font-size: 35px;
        font-weight: bold;
        padding:40px;
    }

    .page-prev-next{
        display: flex;
        justify-content:center;
        align-items:center;
        gap:20px;
        margin-left: 550px;
        padding:50px;
        
    }
`