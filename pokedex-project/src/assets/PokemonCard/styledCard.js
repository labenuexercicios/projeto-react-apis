import styled from "styled-components";
import pokebg from "../pokebg.png"

export const CardStyle = styled.div`
       
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4vw;
    padding: 13vh 0 10vh 0;

`

export const PokemonCard = styled.div`

.pokemoncard{
        width: 440px;
        height: 210px;
        display: flex;
        flex-direction: column;
        border: solid 1px black;
        border-radius: 8px;
        background: url("${pokebg}") ${props => props.color1};
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
        :hover{
            transform: scale(-1.1, 1.1);
        }
    }

    .types {
        display: flex;
        gap: .5vw;
        position: relative;
        top: -15.5vh;
        padding-left: 1vw;
    }

    #type{
        border-radius: 8px;
        padding: 0.4rem 1.8rem;
        border: 1px dashed rgba(255, 255, 255, 0.47);
    }

    .sub-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 7.5vw;
        position: relative;
        top: -10vh;
    }
    
    #details{
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        color: white;
        padding: 0 0 2vh 1vw;
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