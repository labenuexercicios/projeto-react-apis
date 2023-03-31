import styled from "styled-components";
import fundocard from "../../icons/pokeball.svg"

export const MainCardDetails = styled.div`
    border-radius: 38px;
    background-color: ${props => props.colorCard};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 1389px;
    height: 663px;
    background-image: url(${fundocard});
    background-size: 65% auto;
    background-repeat: no-repeat;
    background-position: top right;  
`

export const DisplayPokemon = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 613px;
    margin-left: 40px;
    div{
        display: flex;
        justify-content: center;     
        align-items: center;
        border-radius: 8px;
        width: 282px;
        height: 282px;
        background-color: white;
    }
    img{
        width: 70%;
    } 
    `

    export const DisplayBaseStats = styled.div`
    border-radius: 12px;
    font-family: 'Poppins';
    width: 343px;
    height: 613px;
    background-color: white;
    margin-left: 30px;
    padding: 20px;
    h2{
        margin-bottom: 10px;
    }
    p{
        display: flex;
        text-align: right;
        justify-content: space-between;
        font-size: 12px;
        
        span:first-child{
            width: 20%;
            text-align: end;
        }
        span:last-child{
            width: 60%;
        }
    }
  `

  export const BarStats = styled.span`
    border-radius: 8px;
    height: 10px;
    
    div{
        border: 1px solid ${props => props.stats < 50 ? 'red' :props.stats < 99? 'orange':'#73AC31'};
        width: ${props => (props.stats/100)*100}%;
        background-color: ${props => props.stats < 50 ? '#FF7B2E' :props.stats < 99? '#FFDD69':'#B5E61D'};
        border-radius: 8px;
        height: 100%;
    }
  `

  export const DisplayNameMove = styled.div`
    margin-left: 30px;
    font-family: 'Poppins';
    img{
        width: 99px;
        height: 31px;
        margin-left: 10px;
        margin-bottom: 24px;
    }
    h3{
        color: white;
        font-size: 16px;
        font-weight: bold;  
    }
    h1{
        text-transform: capitalize;
    }
    div:last-child{
        border-radius: 8px;
        background-color: white;
        padding: 20px;
        height: 453px;
        width: 292px;
    }
  `

  export const DisplaySpritePokemon = styled.div`
    img{
        width: 270px;
        margin-left: 30px;
        margin-bottom: 620px;
    }
    `

export const DisplayMoves = styled.p    `
    background-color: #ECECEC;
    font-size: 14px;
    border-radius: 12px;
    border: 1px gray dashed;
    margin-bottom: 10px;
    width: auto;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    `