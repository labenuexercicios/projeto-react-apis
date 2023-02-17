import styled from "styled-components"
import background from "../imagem/source.jpg"

export const ContainerHome = styled.div `
    width: 100%;
    font-family: cursive;
    min-height: 100vh;
    box-sizing: border-box;
    background-image:  url(${background});
    background-repeat: no-repeat;
    background-size: cover;
` 

export const Main = styled.main `
    display: flex;
    gap: 3%;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
`
export const CardPokedex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 330px;
    height: 200px;
    border-radius: 5%;
    margin-bottom: 3%;
    :hover {
        transform: scale(1.1);
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button{
        background-color: green;
        color: #fff;
        font-size: 1rem;
        margin-bottom: 3%;
        cursor: pointer;
        border-radius: 5px;
        padding: 2px 5px;
        :hover {
            background-color:#292929 ;    
        }
    }

    img{
        max-width: 150px;
        filter: drop-shadow(12px -5px 4px #12111269);
    }
`

export const EmptyList = styled.div `
    text-align: center;
    font-family: cursive;
    width: 70%;
    padding: 15% 0 15% 0;
    background: rgba( 73, 182, 117, 0.70 );
    color: antiquewhite;
    border-radius: 5%;
`
