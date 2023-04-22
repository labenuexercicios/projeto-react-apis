import styled from "styled-components";
import pokebg from "../../assets/pokebg.png"

export const CardsContainerStyle = styled.div`
       
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 80vw;
    gap: 4vw;
    padding: 13vh 0 10vh 0;

`
export const PokemonCardStyle = styled.div`

.pokemoncard{
        min-width: 440px;
        max-height: 210px;
        display: flex;
        flex-direction: column;
        border: solid 1px black;
        border-radius: 8px;
        background: url("${pokebg}") ${props => props.colorCard};
        background-repeat: no-repeat;
        background-position: 9.9vw;
    }

    .main-container{
        display: flex;
        line-height: 3vh;
        margin-top: 2vh;
        gap: 2vw;
    }
    
    p{
        font-family: 'Poppins', sans-serif;
        color: white;
        margin-left: 1vw;
    }

    #name{ 
        font-weight: 700;
        font-size: 2rem;
    }
    
    #id{font-size: 1rem;}

    #poke-img{
        max-width: 9vw;
        position: relative;
        top: -9vh;
    }

    .types {
        display: flex;
        gap: .5vw;
        padding-left: 1vw;
        margin-top: 3vh;
        #type1{background: ${props => props.colorType1};}
        #type2{background: ${props => props.colorType2};}
        
        #typeicon{
            width: 25%;
            position: relative;
            top: -.2vh;
        }

    
    }

    #type1, #type2{
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5vw;
        position: relative;
        top: -2vh;
        font-size: 14px;
        border-radius: 8px;
        padding: 0.4rem .7rem;
        color: white;
        border: 1px dashed rgba(255, 255, 255, 0.47);
    }

    .sub-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 7.5vw;
        position: relative;
        top: -10.5vh;
    }
    
    #details{
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        color: white;
        padding: 0 0 2vh 1vw;
        font-weight: 700;
        margin-top: 8vh;
        cursor: pointer;
        :hover{text-decoration: underline;}
    }

    button{
        border: none;
        display: flex;
        align-items: center;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        font-size: 1rem;
        position: relative;
        top: 1.5vh;
        border-radius: 8px;
        cursor: pointer;
       
    }

    #capture{
        padding: .6rem 2.5rem;
        margin-left: 1.6vw;
        background-color: white;
        :hover{background-color: #EAEAEA;}
    }

    #remove{
        padding: .6rem 3rem;
        margin-left: 1.8vw;
        color: white;
        background-color: #FF6262;
        :hover{background-color: #FF3535;}
    }
`