import styled from "styled-components";

export const PokemonDetailPageContainer = styled.div`

    background-color:#5E5E5E;
    color:white;
    padding: 20px;
    padding-left:20px;
    
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
    
    .pokemon-nome{
        font-size: 42px;
        font-weight: bold;
    }
   
  
    .detail-page{
        width: 1300px;
        height: 900px;
    }
    

    .green-div-page{
        /* display: flex;
        flex-wrap: wrap; */
        width: 1600px;
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
        margin-left:890px;
        margin-top:0;
        position: absolute;
       
    }
    
    .div-test{
       
        display: flex;
        flex-wrap: wrap;
        position: absolute;
    }
    .pokemon-front-back{
        width: 350px;
        height: 611px;
        margin-left:15px;
    }

    .img-pokemon-front{
        width: 350px;
        height: 285px;
        background-color: white;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img-pokemon-back{
        width: 350px;
        height: 285px;
        background-color: white;
        margin-top: 35px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .base-stats-pokemon{
        width: 450px;
        height: 611px;
        margin-left:50px;
        background-color: white;
        border-radius: 12px;
        color: black;
        padding:20px;
    }

    .type-moves-pokemon{

        width: 287px;
        height: 611px;
        margin-left:30px;
        margin-left:50px;
        
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
        width: 350px;
        height: 423px;
        margin-top: 35px;
        background-color: white;
        border-radius: 12px;
        color:black;
        padding:20px;
    }

    .img-pokemon-detail{
        width: 290px;
        position: absolute;
        z-index:999;
        margin-left:1300px;
        margin-bottom: 900px;
    }

    .stats {
        /* display: grid;
        grid-template-columns: 1fr 1fr 1fr; */

        /* display: flex;
        margin-bottom: 15px;
        align-items: center;
        justify-content: space-around; */
        //antigo
        /* display: flex;
        justify-content: flex-start; */
        text-align: right;

    }

    /* .stats-name{
        display: flex;
        justify-content: end;
        padding-right: 15px;
    } */

    .stats-name{
        display: flex;
        text-align: left;
    }

    .stats-value{
        /* display: flex;
        justify-content: start;
        width: fit-content; */
    }
    .stats-progress{
    }
    
    .progress-base, .stats-progress{
        background-color: #5E5E5E;
        width: 155px;
    }

    .stats-value{
        display: grid;
        grid-template-columns: 2fr 1fr 6fr;
        margin:10px;
        gap: 10px;
    }


`