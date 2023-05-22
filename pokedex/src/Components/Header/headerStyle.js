import styled from "styled-components";
import logo from '/Users/Dev.Garr/Desktop/Labenu/projeto-react/projeto-react-apis/pokedex/src/assets/logo.png'

export const HeaderStyle = styled.section`
    display: flex;
    
    justify-content: center;
    align-items: center;
    margin-bottom: 3em;
    
`
export const ButtonPokedex = styled.button`
    display: flex;
    position: absolute;
    right: 3em;
    
    
    background-color: #33A4F5;
    color: #FFFFFF;
    padding: 0.5em 4em;
    border-radius: 8px;
    border-color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    
`
export const Logo = styled.img`
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 340px;
    height: 20vh;
    border-color: transparent;
    position: relative;
    margin-top: 2em;
    
`
export const ButtonExcluir = styled.button`
    display: flex;
    position: absolute;
    right: 3em;
    background-color: #FF6262;
    color: #FFFFFF;
    padding: 0.5em 2em;
    border-radius: 8px;
    border-color: #FF6262;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 24px;
`

export const ButtonVoltar = styled.button`
    display: flex;
    text-decoration: underline;
    position:absolute;
    left:3em;
    color: #1A1A1A;
    padding: 2em;
    background-color: #FFFFFF;
    border-color: #FFFFFF;
    border-style: none;
    font-weight: 700;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    
`