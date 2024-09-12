import styled from "styled-components";

export const HomeDetails = styled.div`
   background-color: #5E5E5E;
    width: 1500px;
    height: 1000px;
    display: flex;
    flex-direction: column;

    .title{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #FFFFFF;
    margin: 60px 0px 0px 40px;
    position: absolute;
    width: 420px;
    height: 72px;
    }
`

export const CardDetails = styled.div`
    height: 663px;
    width: 1389.142822265625px;
    border-radius: 37.88571548461914px;
    background-color: #729F92;
    margin: 188px 25px 163px 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr ;
    grid-template-rows: 1fr 1fr;


    .foto-front{
    height: 282px;
    width: 282px;
    margin-left: 44px;
    margin-top: 26px;
    border-radius: 8px;
    background-color: #FFFFFF;
    }

    .base-stats{
        
    height: 613px;
    width: 343px;
    margin-left: 34px;
    margin-top: 24px;
    border-radius: 12px;
    background-color: #FFFFFF;
    }

    .foto-back{
    height: 282px;
    width: 282px;
    margin-left: 44px;
    margin-top: -280px;
    border-radius: 8px;
    background-color: #FFFFFF;
    }

    .moves{
    height: 453px;
    width: 292px;
    position: absolute;
    margin: 184px 100px 52px 771px;
    border-radius: 8px;
    background-color: #FFFFFF;
    }
`

export const InfosPokemon = styled.div`
    width: 282px;
    height: 141px;
    margin: 24px 380.14px 68px 68px;
`

export const Image = styled.img`
width: 200px;
height: 200px;
`

export const ImagePokebola = styled.img`
    height: 800px;
    width: 800px;
    margin-left: 700px;
    margin-top: -900px;
    border-radius: 37.88571548461914px;
`