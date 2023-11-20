import styled from "styled-components"
import background from "../imagem/source.jpg"

// -- Tudo abaixo faz parte do Component Header - ////////
// estilizaçao do botao ...
export const Button = styled.button `
    background-color: #00042299;
    color: #fff;
    font-size: 42px;
    padding: 5px 25px;
    border-radius: 10px;
    position: absolute;
    right: 0;
    z-index: 0;
    :hover {
        box-shadow: 1px 2px 2px #000;
    }
    cursor: pointer;

`
export const ImgBtn = styled.img` // imagem da pokebola -//
    height: 10vh;
    position: absolute;
    left:0 ;
    z-index: 1;
    border-radius: 100%;
    box-shadow: 3px 3px 3px #000;
`

export const DivBtn = styled.div `
    position: relative;
    background-color: transparent;
    display: flex;
    align-items: center;
    width: 300px;
    margin-right: 10px;
    box-sizing: border-box;
`

export const LogoImg = styled.img `
    height: 15vh;
    object-fit: cover;
    margin: 0 auto; 
` 
export const Header = styled.header `
    background-color: red;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    
    @media (max-width: 700px) {

        ${DivBtn} {
            
            width: 190px;
            ${Button} {
                font-size: 28px;
                padding: 5px 10px;
            }
            ${ImgBtn} {
                height: 70px;
                width: 70px;    
            }
        }
        ${LogoImg} {
            height: 100px;
        }
    }
`


export const Main = styled.main `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
`

export const ContainerHome = styled.div `
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    background-image:  url(${background});
    background-repeat: no-repeat;
    background-size: cover;
` 

