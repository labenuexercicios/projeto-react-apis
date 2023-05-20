import styled from "styled-components";

export const ContainerDetails = styled.div`
    background-color: gray;
    height: 100%;
    padding: 50px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    color: white;
    /* align-items: center;
    justify-content: center;  */

`
export const PokeballD = styled.img`
width: 650px;
left: 643px;
top:211px;
position: absolute;
`
export const CardContainer = styled.div`
    padding: 30px 50px;
  width: 90vw;
  height: 75vh;
  background-color: ${(props) => props.color[0]};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin: 50px;
  color:white;
`
export const PokemonNameD = styled.h1`
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
    color: white;
`
export const CardFront = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Pokeimg = styled.div`
  display: flex;
  flex-direction:column;
  gap: 50px;


`
export const CardBack = styled.div`
    background-color: white;
    border-radius: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FrontBackImg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

`
export const Pokemon = styled.img`
  width: 400px;
  position: absolute;
  left: 950px;
  top: -20px;
`
export const BackeFrontImg = styled.img`
    width: 200px;
`
export const BaseStates = styled.div`
    background-color: white;
    width: 23vw;
    height: 66vh;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    color: black;
`
export const Title = styled.h2`
   /*  margin-bottom: 150px; */
`

export const Moves = styled.div`
    background-color: white;
    width: 15vw;
    height: 40vh;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

`
export const MovesPoke = styled.li`
    list-style: none;
    background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.1,4);
border-radius: 12px;
    padding: 5px;
    margin: 10px;
    text-align: center;
    border-radius: 20px;
    width: 7em;
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const NameImg = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProgressFill = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: ${({ value }) =>
    value > 60 ? 'gold' : value > 20 ? 'orangeRed' : 'red'};
  width: ${({ value }) => `${value}%`};
`;
export const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: lightgray;
  margin-left: 10px;
`;
export const BaseList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  gap: 10px;
  box-sizing: border-box;
  padding: 10px;
  color: black;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; /* Adicionado para alinhar verticalmente os elementos */
  width: 14em;
  font-weight: bolder;
`;