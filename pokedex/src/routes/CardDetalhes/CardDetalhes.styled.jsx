import styled from "styled-components";


export const BoxPrincipal = styled.div`
     min-width: 100%;
     max-width: 100%;
     max-height: 663px;
     min-height: 663px;
     background-color:${(props) => props.color};
     border-radius: 20px;
     display: grid;
     grid-template-column : 1fr 1fr;
     display: flex;
     padding-left: 44px;
     padding-top: 26px;
     padding-bottom:26px;
     margin: 0 auto;
     
     .ladoDireito{
        border: 1px solid yellow;
        width: 100%;
     }
`
export const LadoEsquerdoDT = styled.div`
    width: 105%;
    display: flex;
    gap: 20px;

    .cardDuplos{
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 47px;
        justify-content: space-between;
        align-items: center;
    }
    .cardFront{
        width: 282px;
        background-color: white;
        height: 282px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cardBack{
        width: 282px;
        background-color: white;
        height: 282px;
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
        margin-left: 15px;
    }
    .img_dupla{
        width: 110px;
        height: 110px;
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
        width:343px;
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
    width: 95%;
    display: flex;
    position: relative;

    .cardLadoEsquerdo{
        width: 50%;
        height: 100%;
        padding-left: 60px;
    }
    .cardLadoDireito{
        width: 50%;
        height: 100%;
    }
    p{
        color: white;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
    }
    h2{
        font-size: 38px;
        font-weight: bold;
        color: #FFFFFF;
    }
    .moves{
        padding: 10px 15px;
        border-radius: 10px;
        min-height: 437px;
        min-width: 292px;
        max-height: 437px;
        max-width: 292px;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    span{
        background-color:#ECECEC;
        padding: 10px;
        text-align: center;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 12px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        width: fit-content;

    }
    .types{
        display: flex;
        gap: 18px;
        margin-bottom: 45px;
    }
    .titleMove{
        font-weight: bold;
        font-size: 24px;
        font-family: 'Inter';
        font-style: normal;
        margin-bottom: 20px;
    }
`
export const Img1 = styled.img`
      min-width: 667px;
      max-width: 667px;
      min-height: 664px;
      max-height: 664px;
      z-index: 0;
      position: absolute;
      right: 1px;
      top: -27px;
`
export const ImgCard2 = styled.img`
      width: 270px;
      height: 270px;
      position: relative;
      bottom: 90px;
      left: 20px;
`