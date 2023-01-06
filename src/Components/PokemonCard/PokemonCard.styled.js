import styled from "styled-components";

export const PokemonCardContainer = styled.div`

    
    color:#5E5E5E;
    
    .div-card-externo{
        width: 450px;
        height: 285px;
        position: relative;
        margin: 0 20px 20px 20px;
    }

    .div-card-interno{
        width: 100%;
        height: 210px;
        background-color: ${props => props.color};
        position: absolute;
        bottom: 0;
        color: white;
        font-family: 'Poppins', sans-serif;
        padding: 0 20px 20px 20px;
        border-radius:15px;
    }
    .pokemon-nome{
        font-size: 30px;;
    }

    .div-type{
        display: flex;
        gap:5px;
        
    }

    .div-botoes{
        display: flex;
        justify-content :space-between;
        margin-top:35px ;
        font-weight: bold;
    }
    .btn-capturar{
        background-color: #FFFFFF;
        width: 125px;
        height: 40px;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: black;
        border-radius: 8px;
        
      
    }

    .btn-excluir{
        background-color: #FF6262;
        width: 125px;
        height: 40px;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        color:white;
        border-radius: 8px;
    }

    .btn-detalhes{
        font-family: 'Poppins', sans-serif;
        /* font-weight: bold; */
        font-size: 20px;
        text-decoration: underline;
    }

    .pokemon-img{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 999;
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