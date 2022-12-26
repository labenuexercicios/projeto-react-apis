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
     
`
export const LadoEsquerdoDT = styled.div`
    width: 100%;
    display: flex;

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
        width: 48%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        padding:30px;
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
        width: 320px;
        border-top: 2px solid #ECECEC;
        border-bottom: 2px solid #ECECEC;
        color:gray;
        font-weight: bold;
        position:relative;
        right: 110px;
        top: 20px;
    }
    .border{
        width: 100%;
    }
    .numberBase1{
        color: black;
        margin-left: 45px;
    }
    .numberBase2{
        color: black;
        margin-left: 17px;
    }
    .numberBase3{
        color: black;
        margin-left: 5px;
    }
    .numberBase4{
        color: black;
        margin-left: 13px;
    }
    .numberBase5{
        color: black;
        margin-left: 13px;
    }
    .numberBase6{
        color: black;
        margin-left: 18px;
    }
    .numberBase7{
        color: black;
        margin-left: 34px;
    }
`
export const LadoDireitoDT = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    gap: 40px;
    margin-left: -20px;

    .cardLadoEsquerdo{
        width: 50%;
        height: 100%;
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
      bottom: 160px;
      right: 40px;
`