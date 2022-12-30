import styled from "styled-components";

export const PokemonCardContainer = styled.div`

    
    color:#5E5E5E;
    
    .div-card-externo{
        width: 395px;
        height: 263px;
        border: 2px solid red;
        position: relative;
    }

    .div-card-interno{
        width: 100%;
        height: 210px;
        border:2px solid black;
        /* margin-top: 49px; */
        background-color: ${props => props.color};
        position: absolute;
        bottom: 0;
        color: white;
        font-family: 'Poppins', sans-serif;
        padding: 0 20px 20px 20px;
    }

    .div-type{
        display: flex;
        gap:5px;
        
    }

    .div-botoes{
        display: flex;
        justify-content :space-between;
        margin-top:45px ;
        font-weight: bold;
    }
    .btn-capturar{
        background-color: #FFFFFF;
        width: 125px;
        height: 40px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        color: black;
        border-radius: 8px;
      
    }
    .btn-detalhes{
        font-family: 'Poppins', sans-serif;
        /* font-weight: bold; */
        font-size: 14px;
        text-decoration: underline;
    }

    .pokemon-img{
        position: absolute;
        top: 0;
        right: 0;
    }
    
    .pokebol-symbol{
        position: absolute;
        top: 0;
        right: 0;
    }

    .descricao{
         margin-top: 20px;
    }
`