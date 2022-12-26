import styled from "styled-components";

export const BoxCard = styled.div`
    background-color: ${(props) => props.color};
    width: 440px;
    height: 210px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
`
export const EsquerdoCard = styled.div`
    width: 100%;
    height: 210px;
    padding-left: 20px;
    padding-top: 20px;
    color: white;

    .linkDetalhes{
      width: 100%;
      height: 120px;
      font-weight: bold;
      font-size: 18px;
      display: flex;
      align-items: center;
    }
    .nameDetalhes{
      color:white;
      font-size:16px;
    }
    p{
        font-size: 16px;
        font-weight: bold;
    }
    h2{
        width:159px;
        height: 39px;
        font-size:32px;
        font-weight: bold;
        margin-bottom: 15px;
    }
`
export const DireitoCard = styled.div`
    width: 100%;
    height: 210px;
    display: flex;
    flex-direction: column;
    z-index: 0;
`
export const ImgFundo = styled.img`
   width: 210px;
   height: 210px;
   position: relative;
   bottom: 120px;
   right: 15px;
   z-index: -1;
`
export const ImgPrincipal = styled.img`
   min-width: 150px;
   min-height: 140px;
   max-width: 150px;
   max-height: 140px;
   position: relative;
   top: -50px;
   left: 25px;
   z-index: 0;
`
export const ButtonCapturar = styled.button`
   padding: 10px 10px;
   width: 146px;
   height: 38px;
   border: none;
   border-radius: 8px;
   z-index: 1;
   position: relative;
   bottom: 160px;
   font-size: 16px;
   margin: 0 auto;
   cursor: pointer;
   z-index: 0;
`
export const ButtonCapturar2 = styled.button`
   background-color:#FF6262;
   color: white;
   padding: 10px 10px;
   width: 140px;
   border: none;
   border-radius: 8px;
   z-index: 1;
   position: relative;
   bottom: 150px;
   font-size: 16px;
   margin: 0 auto;
   cursor: pointer;
`
export const TypeImg = styled.img`
   width: 91px;
   height: 31px;
   margin-right: 10px;
`
export const TypeImg2 = styled.img`
   width: 91px;
   height: 31px
`
export const PageDetalhes = styled.a`
   border-bottom: 1px solid #FFFFFF;
   font-size: 18px;
   font-weight: bold;
   top: 40px;
   position: relative;
   cursor: pointer;
`