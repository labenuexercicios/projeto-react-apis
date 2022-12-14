import styled from 'styled-components/';

export const DetailsContainer = styled.main`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 2fr ;
    justify-self: center;
    /* justify-items: center; */
    margin: 20px 10px;
    border-radius: 15px;
    background-color: green;
    gap: 15px;
`;

export const ImgBoxFront = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    border-radius: 15px;
    background-color: white;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
`
export const ImgBoxBack = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    border-radius: 15px;
    background-color: white;
    grid-row: 3 / 4;
    grid-column: 1 / 2;
`
export const BaseStatus = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    border-radius: 15px;
    background-color: white;
    grid-row: 1 / 4;
    grid-column: 2 / 3;
`
export const PokemonData = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    border-radius: 15px;
    grid-row: 1 / 2;
    grid-column: 3 / 4;
`
export const Moves = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    border-radius: 15px;
    background-color: white;
    grid-row: 2 / 4;
    grid-column: 3 / 4;
`

export const ImagePokemon = styled.div`
    display: flex;
    flex-direction: column;
    border: solid white 1px;
    border-radius: 15px;
    grid-row: 1 / 2;
    grid-column: 4 / 5;
`
