import styled from "styled-components"


export const HeaderPagListaCss = styled.header`
    display: grid;
    grid-row: 1/2;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 160px;
    @media screen and (max-width:768px) {
        display: flex;
        margin-top: 20px;
    }
    /* @media screen and (max-width:600px) {
        display: flex;
        align-items: center;
        width: 600px;
    } */

`
export const HeaderPagListaCss2 = styled.header`
    display: grid;
    grid-row: 2/3;
    grid-template-columns: 1fr 1fr;
    background-color: #DDDDDD;
    color: white;
    align-items: center;
    padding-left: 20px;
        @media screen and (max-width:768px) {
        display: flex;
        align-items: center;

    }
    @media screen and (min-width:769px) and (max-width:900px) {
        display: flex;
        align-items: center;

    }

`

export const HeaderPagListaEsquerda = styled.header`
    display: grid;
    grid-column: 1/2;
    align-items: center;
    justify-items: center;
    margin-bottom: 40px;

   @media screen and (min-width:769px) and (max-width:1040px) {
        display: flex;
        align-items: center;
        /* align-content: center;
        justify-content: center;
        justify-items: center; */
        margin-left: 10px;
    }
    @media screen and (min-width:380px) and (max-width:768px) {
        display: flex;
        align-items: center;
        /* align-content: center;
        justify-content: center;
        justify-items: center; */
        margin-left: 10px;
    }

`

export const HeaderPagListaMeio = styled.header`
    display: grid;
    grid-column: 2/3;
    align-items: center;
    justify-items: center;
    margin-bottom: 40px;
    @media screen and (min-width:769px) and (max-width:900px) {
        margin-bottom: 40px;

    }
    @media screen and (min-width:380px) and (max-width:768px) {
        display: flex;
        align-items: center;
        margin-left: 10px;
        margin-top: -20px;
    }



`

export const HeaderPagListaDireita = styled.header`
    display: grid;
    grid-column: 3/4;
    align-items: center;
    justify-items: center;
    margin-bottom: 50px;
    @media screen and (max-width:768px) and (min-width: 601px ) {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        margin-top: 30px;
        margin-left: 270px;
    }
    @media screen and (min-width:380px) and (max-width:768px) {
        display: flex;
        align-items: center;
        margin-top: -1px;
        margin-left: 80px;
    }


`

export const Titulodapagina = styled.header`
    display: grid;
    grid-row: 1/2;
`

export const Centralizarcapturadetalhe = styled.body`
    display: grid;
    align-content: center;
    justify-content: start;
    margin-top: 10vh;
    margin-left: 40vw;

`