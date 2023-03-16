import {Image, Stack, Center, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";


export const CardStyle = styled.div`


    display: flex;
    flex-wrap: wrap;
    background-color: black;


`

export const Blocodocard = styled.div`

`


export const Imagemdopokemon = styled.img`

    width: 193px;
    height: 193px;
    margin-left: 250px;

`

export const Styledotype = styled.div`
    gap: 10px;
    color: black;
    border: 3px solid black;
    width: 50px;

`

export const Botao = styled.button`
    cursor: pointer;

`
export const Diminiumargemdaimagem = styled(Image)`
    position: absolute;
    right: 0;
    top: -60px;
    width: 193px;
    height: 193px;
    @media screen and (max-width:768px) {
        width: 150px;
        height: 150px;
    }

    

`

export const Cardresponsivo = styled(Center)`
    @media screen and (max-width:768px) {
        display: flex;
        width: 45vw;
        margin-top: 20px;
    }


`
export const Cardresponsivocap = styled(Center)`
    @media screen and (max-width:768px) and (min-width:380px){
        width: 100vw;

    }

`

export const Headerdocardresponsivo = styled(Heading)`
    @media screen and (max-width:768px) {
        padding: 0;
        margin-top: 0;
    }

`

export const Passarpragrid = styled(Stack)`
    display: grid;

`

export const DeixarRoll = styled.section`
    /* display: flex;  */

`

export const Posicaodocard = styled.body`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: #DDDDDD;
    padding-left: 30px;
        @media screen and (max-width:768px) {
        display: flex;
        align-items: center;
        align-content: center;
    }

`

export const Formatodaimagemdetalhe = styled.img`
    padding: 60px;
    border-radius: 10px;
    height: 282px;
    width: 282px;
    background-color: white;
    @media screen and (max-width:768px) and (min-width:380px){
        width: 30vw;
        height: 30vh;
        margin-left: 20px;
        margin-top: 240px;
    }

`

export const Formatodosbasestats = styled.div`
    padding: 30px;
    border-radius: 10px;
    height: 613px;
    width: 343px;
    background-color: white;
    @media screen and (max-width:768px) and (min-width:380px){
        position: relative;
        width: 40vw;
        height: 56vh;
        left: 10px;
        bottom: 430px;
    }


`
export const Formatodosbasestats2 = styled.div`
    padding: 30px;
    border: 2px solid red;
    border-radius: 10px;
    height: 453px;
    width: 292px;
    background-color: white;
    @media screen and (max-width:768px) and (min-width:380px){
        position: relative;
        width: 40vw;
        height: 60vh;
        left: 320px;
        top: -875px;
    }

`

// export const Center = styled.nav`
//     /* display: grid; */

// `

export const Pokebola = styled.img`
    position: absolute;
    height: 200px;
    width: 240px;
    opacity: 0.4;
    top: -40px;
    right: -10px;
        @media screen and (max-width:768px) {
        width: 200px;
        height: 150px;
    }

`

export const Imagensdodetalhe = styled.nav`
    /* padding: 20px; */
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 48px;
        @media screen and (max-width:768px) and (min-width:380px){
        display: flex;
        flex-direction: row;
        position: relative;
        top: 140px;
        bottom: -100px;
    }
    
`

export const Alinharositens = styled.div`
    display: flex;
    flex-direction: column;

`

export const Tamanhodopokemon = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 39px;

`

export const Quadradodostats = styled.div`
    border-radius: 10px;
    background-color: #ECECEC;
    padding: 10px;


`
export const Espacoentreositens = styled.div`
   padding: 10px;

`

export const Espacoentreostipos = styled.img`
    padding-left: 5px;
    @media screen and (max-width:768px) and (min-width:380px){
        width: 20vw;
      
    }
`

export const Separarostipes = styled.img`

    margin-bottom: 30px;

`

export const Styleresponsivo = styled.section`
     @media screen and (max-width:768px) and (min-width:380px){
        display: flex;
        width: 60px;
        height: 40px;
        margin-top: -380px;
        margin-left: 550px;

      
    }

`

export const Nomeeidresponsivo = styled(Text)`
    @media screen and (max-width:768px) and (min-width:380px){
        position: relative;
        top: -380px;
        left: 560px;
        color: white;
    }

`
export const Carddodetalhe = styled.img`
    @media screen and (max-width:768px) and (min-width:380px){
        position: relative;
        width: 200px;
        left: 280px; 
        top: -1200px;
        left: 500px;
    }

`