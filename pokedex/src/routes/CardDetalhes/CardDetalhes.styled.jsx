import styled from "styled-components";


export const BoxPrincipal = styled.div`
     width: 100%;
     max-height: 480px;
     min-height: 480px;
     background-color:${(props) => props.color};
     border-radius: 20px;
     display: grid;
     grid-template-column : 1fr 1fr;
     display: flex;

     
     .ladoDireito{
        border: 1px solid yellow;
        width: 100%;
     }
`
export const LadoEsquerdoDT = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
    gap: 20px;

    .cardDuplos{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .cardFront{
        width: 100%;
        background-color: white;
        height: 100%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cardBack{
        width: 100%;
        background-color: white;
        height: 100%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .progresso{
        width: 60%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        padding:25px;
    }
    .img_dupla{
        width: 90px;
        height: 90px;
    }
    .poderes{
        display: flex;
    }
    .titleBase{
        font-size: 27px;
        font-weight: bold;
        padding-bottom: 15px;
        border-bottom: 2px solid #ECECEC;
    }
    .progressoHP{
        width:100%;
        border-bottom: 2px solid #ECECEC;
        color:gray;
        padding-bottom: 5px;
        font-weight: bold;
    }
    .numberBase{
        color: black;
        margin-left: 15px;
    }
`
export const LadoDireitoDT = styled.div`
    width: 100%;
    display: flex;
    position: relative;

    .cardLadoEsquerdo{
        width: 50%;
        height: 100%;
        padding-top: 25px;
        padding-left: 25px;
    }
    .cardLadoDireito{
        width: 50%;
        height: 100%;
    }
    p{
        color: white;
        font-weight: bold;
    }
    h2{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 15px;
        color: #FFFFFF;
    }
    .moves{
        padding: 10px 15px;
        margin-top: 20px;
        border-radius: 10px;
        height: 270px;
        width: 100%;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    span{
        background-color:#ECECEC;
        padding: 5px 0;
        text-align: center;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 8px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
    }
    .types{
        display: flex;
        gap: 10px;
    }
    .titleMove{
        font-weight: bold;
        font-size: 20px;
    }
`
export const Img1 = styled.img`
      min-width: 600px;
      max-width: 600px;
      min-height: 480px;
      max-height: 480px;
      z-index: 0;
      position: absolute;
      right: 1px;
`
export const ImgCard2 = styled.img`
      width: 200px;
      height: 200px;
      position: relative;
      bottom: 90px;
      left: 20px;
`