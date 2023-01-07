import styled from "styled-components";

export const Container = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
`


export const Div = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
gap: 100px;
background: #5E5E5E;
height: 100%;
padding: 5px;




h1{

top: 220px; 
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
}

.classeh1{
    display: flex;
    color: white;
    font-family: 'Poppins';
  font-style: normal;
    width: 100%;
    margin-left: 31px;
  }
  
`
export const CartaoPokemon = styled.div`
.pokemonheader{
  display: flex;
  justify-content: flex-end;
  align-items: center;

}


h1{
  display: flex;

}
.botao{
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-left: 300px;
  color: white;
  
  width: 287px;
  height: 74px;
  left: 641px;
  top: 41px;
  background: #33A4F5;
  border-radius: 8px ;
  border-color: white;
  
  
  
  }

`