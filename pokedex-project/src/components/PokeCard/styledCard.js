import styled from "styled-components";
import pokebg from "../../assets/pokebg.png"

export const PokemonCardStyle = styled.div`

    .pokemoncard{
        max-width: 25vw;
        height: 24vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 2.5vh;
        border: solid 1px black;
        border-radius: 8px;
        background: url("${pokebg}") ${props => props.colorCard};
        background-repeat: no-repeat;
        background-position: 10vw;
    }

       
    button{
        font-family: "Poppins", sans-serif;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        border-radius: 8px;
        cursor: pointer;
    }

    .main-container{
        display: flex;
        flex-direction: column;
        gap: 3vh;     
        margin-left: 1.3vw;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        color: white;
        #id{font-size: 1rem;}
        #name{font-size: 2rem;}
    }
    
    
    .types {
        display: flex;
        gap: .5vw;
        margin-top: 1vh;
        #type1, #type2{
            color: white;
            gap: .5vw;
            font-size: 14px;
            border-radius: .5rem;
            padding: 0.4rem .7rem;
            border: 1px dashed rgba(255, 255, 255, 0.47);
        }
        #type1{background: ${props => props.colorType1};}
        #type2{background: ${props => props.colorType2};}
        img{
            width: 25%;
            position: relative;
            top: -.2vh;
        }
    }

    #details{
        font-weight: 600;
        cursor: pointer;
        :hover{text-decoration: underline;}
    }

    .sub-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: -9vh;
        img{
            max-width: 9vw;
            position: relative;
        }
        button{
            width: 9vw;
            height: 5vh;
            position: relative;
            top: 5vh;
        }
    }

    #capture{
        background-color: white;
        :hover{background-color: #EAEAEA;}
    }

    #remove{
        color: white;
        background-color: #FF6262;
        :hover{background-color: #FF3535;}
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
            
    .pokemoncard{max-width: 90vw;}

    button{font-size: 1rem;}

    .main-container{  
        margin-left: 4vw;
        #id{font-size: .8rem;}
        #name{font-size: 1.5rem;}
    }
    
    
    .types {
        gap: 2vw;
        #type1, #type2{
            gap: 1vw;
            padding: 0.2rem .7rem;}
    }

    #details{
        font-size: 4vw;
    }

    .sub-container{
        top: -2vh;
        img{
            max-width: 30vw;
            position: relative;
        }
        button{
            width: 30vw;
            top: 1.5vh;
        }
    }

    }

`