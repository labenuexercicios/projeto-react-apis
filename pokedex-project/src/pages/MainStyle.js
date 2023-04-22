import styled from "styled-components";
import pokebg from "../assets/pokebg.png"

export const PageStyle = styled.section`
    background-color: #747474;
    min-height: 84vh;
    max-width: 100vw;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #title, #top{
        font-family: 'Poppins', sans-serif;
        font-size: 2.5rem;
        color: white;
        font-weight: 700;
        position: relative;
    }

    #title{top : 5vh;}

    #top{
        top: 5vh;
        right: 29vw;
    }

    
    .details-page{
        position: relative;
        top: -4vh;
        background: url("${pokebg}") ;
        background-size: 60vw;
        background-position: center;
        background-repeat: no-repeat;
    }


`

export const CardsContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4vw;
        padding: 10vh 0 10vh 0;


`