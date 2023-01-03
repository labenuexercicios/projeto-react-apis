import styled from "styled-components";

export const PokemonDetailPageContainer = styled.div`

    background-color:#5E5E5E;
    color:white;
    padding: 20px;
    padding-left:20px;
    gap:20px;
    font-family: 'Poppins', sans-serif;
    
    .container-card{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    .h1-detail{
        font-size: 35px;
        font-weight: bold;
        padding: 20px;
        
    }
  
    .detail-page{
        width: 1300px;
        height: 900px;
    }
    

    .green-div-page{
        /* display: flex;
        flex-wrap: wrap; */
        width: 1300px;
        height: 680px;
        background-color: #729F92;
        padding: 35px;
        border-radius: 12px;
        position: relative;
       
        /* bottom: 0; */
    }
    .pokebol-symbol{
        display: flex;
        justify-content: flex-end;
        margin-left:592px;
        margin-top:0;
        position: absolute;
       
    }
    
    .div-test{
       
        display: flex;
        flex-wrap: wrap;
        position: absolute;
    }
    .pokemon-front-back{
        width: 287px;
        height: 611px;
        border: 5px solid black;
        
       

    }

    .img-pokemon-front{
        width: 287px;
        height: 285px;
        background-color: white;
        border-radius: 12px;
        
       
    }

    .img-pokemon-back{
        width: 285px;
        height: 285px;
        background-color: white;
        margin-top: 35px;
        border-radius: 12px;
        
       
    }
    
    .base-stats-pokemon{
        width: 347px;
        height: 611px;
        margin-left:30px;
        background-color: white;
        border-radius: 12px;
       
        
    }

    .type-moves-pokemon{

        width: 287px;
        height: 611px;
        margin-left:30px;
        border: 5px solid black;
        
        

    }

    .name-type-pokemon{
        width: 287px;
        height: 150px;
        border: 5px solid red;
    }
    
    .moves-pokemon{
        width: 287px;
        height: 423px;
        margin-top: 35px;
        background-color: white;
        border-radius: 12px;

    }

    .img-pokemon-detail{
        width: 270px;
        position: absolute;
        z-index:999;
        margin-left:1050px;
        margin-bottom: 900px;
        
    }


`