import styled from "styled-components";
import fundocard from "../../assets/back.svg"

//styled all cards
export const MainCard = styled.div`
 width: 400px;
 height: 200px;
 border-radius: 16px;
 background-color: ${props => props.colorCard};
 font-family: "Inter";
 color: white;
 margin-top: 30px;
 background-image: url(${fundocard});
 background-size: 50% auto;
 background-repeat: no-repeat;
 background-position: top right;

 a{
  font-family: "Poppins";
  font-weight: bold;
  text-decoration-line: underline;
}

  button{
    height: 40px;
    width: 150px;
    font-size: 20px;
    border-radius: 15px;
    font-family: "Poppins"
}`

// image pokemons
export const PokeImage = styled.img`  
width: 200px;
margin-left: 50px;
margin-top: -50px;       
`

// cards direction/space
export const Cards = styled.div`
 display: flex;

  p{
    padding-left: 20px;
    padding-top: 20px;
    font-size: 16px;
    font-weight: bold;
}

  h2{
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
}`

// link details
export const DetailsLink = styled.div`
display: flex;
justify-content: space-between;
padding-left: 20px;
padding-right: 20px;
`
// types img
export const ImageTypes = styled.span`
display: flex;
margin-top: 15px;
padding-left: 15px;

  img{
    width: 50%;
    height: 15%;
}`

// button delete styled
export const DeletePokemon = styled.button`
background-color: #FF6262;
color: white;
`
// styled button to catch pokemon
export const CatchPokemon = styled.button`
background-color: white;
`

export const Loading = styled.img`
width: 52px;    
` 