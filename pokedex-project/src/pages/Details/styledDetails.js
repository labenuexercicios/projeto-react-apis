import styled from "styled-components";
import pokebg from "../../assets/pokebg.png"

export const DetailStyle = styled.div`

    .detailcard{
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2vw;
        width: 85vw;
        height: 70vh;
        border: solid 1px black;
        border-radius: 8px;
        padding: 2vh 1.5vw 2vh 1.5vw;
        background: url("${pokebg}") ${props => props.colorCard};
        background-repeat: no-repeat;
        background-position: 9.9vw;
    }

    #sprite-card, .moves, .base-stats{
        background-color: white;
        border-radius: .5rem;
    }

    .sprites-container{
        display: flex;
        flex-direction: column;
        gap: 5vh;
    #sprite-card{
        width: 15vw;
        height: 15vw;
    }
    }

    .base-stats{
        width: 19vw;
        height: 65vh;
        padding: 1vh 0 0 1vw;
    }
    
    .main-info{
    p{
        color: white;
        margin-left: 1vw;
        position: relative;
        top: 2vh;
    }

    #name{ 
        font-weight: 700;
        font-size: 2rem;
    }
    
    #id{font-size: 1rem;}

    #poke-img{
        transform: scale(-1, 1);
        position: absolute;
        width: 278px;
        height: 278px;
        top: 2vh;
        left: 78vw;
    }

    .types {
        display: flex;
        gap: .5vw;
        position: relative;
        top: -13.5vh;
        padding-left: 1vw;
        
    #type1, #type2{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5vw;
        font-size: 14px;
        border-radius: .5rem;
        padding: 0.4rem .7rem;
        color: white;
        border: 1px dashed rgba(255, 255, 255, 0.47);
    }

    #typeicon{
        width: 25%;
        position: relative;
        top: -.2vh;
    }

    #type1 {background: ${props => props.colorType1};}

    #type2 {background: ${props => props.colorType2};}
    }

    .moves{
        display: flex;
        padding-left: 1vw;
        margin-right: 50vw;
        position: relative;
        left: 1.5vw;
        width: 15vw;
        height: 50vh; 
        ul{
            margin-top: 2vh;
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 2vh;
            li{
                display: flex;
                flex-direction: row;
                align-items: center;
                background: #ECECEC;
                color: black;
                gap: .5vw;
                font-size: 14px;
                border-radius: .5rem;
                padding: 0.4rem .7rem;
                border: 2px dashed rgba(255, 255, 255, 0.47);
    
            }
        }

    }
}
`