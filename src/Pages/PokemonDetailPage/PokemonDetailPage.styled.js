import styled from "styled-components";

export const PokemonDetailPageContainer = styled.div`

    background-color: #5E5E5E;
    color: white;
    padding: 20px;
    padding-left:20px;
    pointer-events: none  !important;
    font-family: 'Poppins', sans-serif;
    
    .container-card{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    .h1-detail{
        font-size: 45px;
        font-weight: bold;
        padding: 20px;
    }

    .h2-style{
        font-size: 30px;
        font-weight: bold;
    }
    
    .move-item{
        font-size: 15px;
        background-color: #edebeb;
        width: fit-content;
        padding: 10px;
        margin-bottom: 8px;
        border-radius: 8px;
        border: 1px dashed gray;
    }

    .pokemon-nome{
        font-size: 42px;
        font-weight: bold;
    }
       
    .green-div-page{
        height: 630px;
        background-color: #729F92;
        padding: 25px;
        border-radius: 12px;
        position: relative;
    }

    .pokebol-symbol{
        position: absolute;
        top: 0;
        right: 0;
    }
    
    .div-test{
        display: flex;
        flex-wrap: wrap;
        position: absolute;
    }
    .pokemon-front-back{
        width: 250px;
        height: 590px;
        margin-left:15px;
        
        
    }

    .img-pokemon-front{
        width: 250px;
        height: 274px;
        background-color: white;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 15px solid red; */
    }

    .img-pokemon-back{
        width: 250px;
        height: 274px;
        background-color: white;
        margin-top: 30px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .base-stats-pokemon{
        width: 320px;
        height: 580px;
        margin-left:25px;
        background-color: white;
        border-radius: 12px;
        color: black;
        padding:10px;
    }

    .type-moves-pokemon{
        width: 287px;
        height: 611px;
        margin-left:25px;
        
    }

    .name-type-pokemon{
        width: 300px;
        height: 150px;
    }

    .div-type{
        display: flex;
        gap:5px;
    }
    
    .moves-pokemon{
        width: 320px;
        height: 395px;
        margin-top: 35px;
        background-color: white;
        border-radius: 12px;
        color: black;
        padding: 20px;
    }

    .img-pokemon-detail{
        width: 290px;
        position: absolute;
        z-index: 999;
        top: 220px;
        right: 35px;
    }

    .stats-name{
        display: flex;
        justify-content: end;
    }
    
    .progress-base, .stats-progress{
        background-color: #5E5E5E;
        width: 155px;
    }

    .stats-value{
        display: grid;
        grid-template-columns: 4fr 1fr 6fr;
        margin:10px;
        gap: 10px;

        h3{
            text-align: right;  
        }
    }

    .fundo-div{
        padding-top:35px;
        
    }

`