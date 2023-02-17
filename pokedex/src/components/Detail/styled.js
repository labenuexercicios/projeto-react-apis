import styled from "styled-components";
import backgroundImg from "../imagem/mountain.png"

export const ContainerDetails = styled.main`
    display: flex;
    min-height: 120vh;
    background-image: url(${backgroundImg});
    background-size: cover;
    flex-direction: column;
    
    h1{
        margin: 5%;
        text-align: center;
        text-transform: capitalize;
        &::first-letter {
            color: #960000;
        }
        display: none;
        @media (max-width: 600px){
            display: block;
        }
    }

    p{
        text-align: center;
    }
    
    @media (max-width: 600px){
        height: 100%;
    }
`

   export const Stats = styled.section`
    box-sizing: border-box;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 5%;
    width: 100vw;
    min-height: 100vh;
    padding: 3% 5%;
    grid-template-areas:     "photos1 stats type "
                             "photos1 stats moves "
                             "photos2 stats moves "
                             "photos2 stats moves ";
    text-align: center;
    text-transform: capitalize;

    @media only screen and (max-width: 700px) {
        grid-template-areas: "photos1 photos2"
            "stats stats"
            "type type"
            "moves moves";
            gap: 0;
            padding: 0 5% 35% 5%;
            row-gap: 3%;
            max-width: 100%;
    }
        div{
           background: rgba( 97, 129, 1, 0.35 );
           box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
           backdrop-filter: blur( 4px );
           -webkit-backdrop-filter: blur( 4px );
           border-radius: 10px;
           border: 1px solid rgba( 97, 129, 1, 0.18 );

            img{
                height: 100%;
                }
        }                     

        div:nth-child(1){
            grid-area: photos1;
            img {
                
            }
            text-align: center;
            max-height: 220px;
        }

        div:nth-child(2){
            grid-area: photos2;
            text-align: center;
            max-height: 200px;
            strong{
                text-align: left;
            }
        }

        div:nth-child(3){
            grid-area: stats;
        }

        div:nth-child(4){
            grid-area: type;
        }

        div:nth-child(5){
            grid-area: moves;
        }
    
   `


