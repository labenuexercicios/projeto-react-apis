import styled from "styled-components";
import pokebg from "../assets/pokebg.png"

export const PageStyle = styled.section`
    background-color: #747474;
    min-height: 84vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #title, #top{
        font-family: 'Poppins', sans-serif;
        font-size: 2.5rem;
        color: white;
        font-weight: 700;
        position: absolute;
        top: 17vh;
    }

    #top{left: 7vw;}

    .details-page{
        position: relative;
        top: -4vh;
        background: url("${pokebg}") ;
        background-size: 60vw;
        background-position: center;
        background-repeat: no-repeat;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
        #title, #top{
        font-size: 1.5rem;
        top : 12vh;
    }

    #top{left: 5vw;}
    }
`

export const CardsContainer = styled.div`
        display: grid;
        min-width: 85vw;
        grid-template-columns: repeat(3, 1fr);
        gap: 4vw;
        padding: 13vh 0 10vh 0;

        @media only screen and (min-width : 320px) and (max-width : 480px) {
            display: flex;
            flex-direction: column;
            padding: 9vh 0 5vh 0;
    }
`