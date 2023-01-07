import styled from "styled-components";

export const PokemonListPageContainer = styled.div`

    background-color:#5E5E5E;
    color:white;
    display:flex;
    flex-wrap: wrap;
    gap: 10px;
    font-family: 'Poppins', sans-serif;
    
    .container-card{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .h1-pokedex-list{
        font-size: 35px;
        font-weight: bold;
        padding: 40px;
    }

    .page-prev-next{
        display: flex;
        width: 100%;
        justify-content:center;
        align-items:center;
        gap:20px;
        margin: 0px 20px 30px 20px;

        
    }
`