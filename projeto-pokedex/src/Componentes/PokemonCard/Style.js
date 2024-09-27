import { Image, Stack } from "@chakra-ui/react";
import styled from "styled-components";


export const Containerdoscard = styled.body`
    //Boas Praticas
    /* margin: 0;
    padding: 0;
    box-sizing: border-box; */
    //Boas Praticas

    /* display: grid;
    grid-row: 3/4; */
    /* grid-template-columns: 100vw;
    grid-template-rows: 1fr; */



`

export const CardStyle = styled.div`


    display: flex;
    flex-wrap: wrap;
    background-color: black;

    //Card
    /* width: 440px;
    height: 210px;
    border-radius: 8px;
    background-color: #729F92;
    color: white; */
    //Card

    /* flex-direction: row;
    flex-wrap: wrap;   */


`

export const Blocodocard = styled.div`
    //Card
    width: 440px;
    height: 210px;
    border-radius: 8px;
    background-color: #729F92;
    color: white;
    cursor: pointer;
    /* opacity: 0; */
    transform: translate3d(3000px,0,0)
    //Card

    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.25);
    padding: 20px 20px;
    margin-bottom: 20px; 
    margin-left: 20px;
`


export const Imagemdopokemon = styled.img`
    /* display: grid; */

    width: 193px;
    height: 193px;
    /* position: static; */
    /* position: fixed; */
    margin-left: 250px;
    /* gap: 100px; */
    /* padding-bottom: 300px; */
`

export const Styledotype = styled.div`
    /* border: 1px solid black; */
        /* display: flex; */
    /* justify-content: space-between; */
    gap: 10px;
    /* align-items: center;
    align-self: center;
    align-content: center;
    justify-content: start; */
    color: black;
    border: 3px solid black;
    width: 50px;

`

export const Botao = styled.button`
    cursor: pointer;

`
export const Diminiumargemdaimagem = styled(Image)`
    margin-top: -80px;
    width: 193px;
    height: 193px;

`

export const Passarpragrid = styled(Stack)`
    display: grid;

`

export const DeixarRoll = styled.section`
    display: flex; 

`

export const Posicaodocard = styled.body`
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    gap: 20px;
    background-color: #523737;
    /* display: grid;
    grid-row: 3/4; */

`

export const Formatodaimagemdetalhe = styled.img`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    height: 282px;
    width: 282px;

`

export const Formatodosbasestats = styled.div`
    border: 2px solid black;
    height: 613px;
    width: 343px;

`

export const Center = styled.nav`
    display: grid;

`