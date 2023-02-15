import styled from "styled-components"

export const Container = styled.div`
background-color: lightblue;
position: relative;
width: 100%;
height: 14vh;
display: flex;
flex-wrap: wrap;
align-content: relative;
justify-content: space-between;
align-items: center;
margin-bottom:-20px;
`

export const LogoPokemon = styled.img`
width: 12vw;
height: 10vh;
&:hover{
cursor: pointer;
}

`

export const PokedexButton = styled.button`
margin: 15px;
width: 10vw;
height: 8.5vh;
padding-right: 4px 10px;
background-color: blue;
border-radius: 14px;
border:blue;
color: white;
font-size: 24px;
&:hover{
cursor: pointer;
}
`