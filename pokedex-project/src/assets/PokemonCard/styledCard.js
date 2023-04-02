import styled from "styled-components";
import pokebg from "../pokebg.png"

export const CardStyle = styled.div`
       
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5vw;
    padding: 15vh 0 15vh 0;


    .pokemoncard{
        width: 440px;
        height: 210px;
        display: flex;
        flex-direction: column;
        border: solid 1px black;
        border-radius: 8px;
        background: url("${pokebg}") green;
        background-repeat: no-repeat;
        background-position: 9.5vw;
    }

    .main-container{
       line-height: 3vh;
    }
    
    p{
        font-family: 'Poppins', sans-serif;
        color: white;
        margin-left: 1vw;
        position: relative;
        top: 1vh;
    }

    #name{ 
        font-weight: 700;
        font-size: 2rem;
    }
    
    #id{
        font-size: 1rem;
    }

    img{
        transform: scale(-1, 1);
        position: relative;
        width: 165px;
        height: 165px;
        top: -11vh;
        left: 13vw;
    }


    .sub-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 7vw;
    }
    
    #details{
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        color: white;
        padding-left: 1.5vw;
        font-weight: 700;
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
    }

    #capture{
        background-color: white;
        border: none;
        display: flex;
        align-items: center;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        font-size: 1rem;
        padding: .8rem 3rem;
        margin-left: .5vw;
        position: relative;
        top: -2.5vh;
        border-radius: 8px;
        cursor: pointer;
        :hover{
            background-color: #EAEAEA;
        }
    }


`