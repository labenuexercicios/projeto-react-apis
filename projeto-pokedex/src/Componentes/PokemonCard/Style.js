import styled from "styled-components";


export const Containerdoscard = styled.body`
    //Boas Praticas
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //Boas Praticas

    display: grid;

    grid-row: 3/4;
    grid-template-columns: repeat(4,1fr);

`

export const CardStyle = styled.div`

    //Card
    display: flex;
    width: 440px;
    height: 210px;
    border-radius: 8px;
    background-color: #729F92;
    color: white;
    /* grid-column: 1/4; */

    /* grid-row: 3/4; */
    //Card

    /* flex-direction: row;
    flex-wrap: wrap;  */


`

export const Imagemdopokemon = styled.img`
    margin-left: 200px;
    /* margin-bottom: 300px; */
    width: 193px;
    height: 193px;
`

export const Styledotype = styled.div`
    /* border: 1px solid black; */
    color: black;
    
`

