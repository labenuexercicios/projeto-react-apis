import styled from "styled-components";

//main header styled
export const MainHeader = styled.div`
display: flex;
background-color: white;
height: 200px;
width: 100%;

div{
display: flex;
justify-content: center;
align-items: center;
width: 600px;        
}
 // logo pokemon
img{
width: 350px;
height: 150px;        
}

a{
font-family: 'Poppins';
font-size: 24px;
font-weight: bold;
}
`
// button add pokedex styled
export const AddPokedex = styled.button`
width: 300px;
height: 80px;
border-radius: 15px;
font-family:'Poppins';
font-weight: bold;
font-size: 30px;
color: white;
background-color: #33A4F5;
`
//button add to pokedex in details page
export const AddPokemon = styled.button`
width: 300px;
height: 80px;
border-radius: 15px;
font-family:'Poppins';
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
background-color: #33A4F5;
color: white;
border: none;
`
//button delete
export const ButtonDeletePokemon = styled.button`
    width: 300px;
    height: 80px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Poppins';
    background-color: #FF6262;
    color: white;
    border: none;
`