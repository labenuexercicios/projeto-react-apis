import styled from "styled-components";

export const HeaderStyle = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16%;
    width: 100vw;
    
    

    img{
        width: 18%;
        padding-bottom: .8vh;
        position: relative;
        left: 7vw;
    }

    button{
        position: relative;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        left: 29vw;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
    }

    #pokedex-button{
        background-color: #33A4F5;
        padding: 1.2rem 5.2rem;
        font-size: 1.5rem;
        font-weight: 700;
        :hover{
            background-color: #1093F3;
        }
    }

    #remove-button{
        left: 29vw;
        background-color: #FF6262;
        padding: 1.2rem 3.5rem;
        font-size: 1rem;
        font-weight: 400;
    }

    #return{
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        position: absolute;
        left: 6vw;
        cursor: pointer;
        :hover{
            text-decoration: underline;
        }
    }
`