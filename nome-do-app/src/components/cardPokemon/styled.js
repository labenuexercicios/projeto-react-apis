import styled from "styled-components"
import ImgFundo from "../../img/Rectangle2.png"

export const Container = styled.div`
height: 210px;
width: 440px;
display: flex;
flex-direction: column;
padding-left: 20px;
padding-top:20px;
justify-content: space-between;
border-radius: 12px;
background-color:${(props) => props.bgColor};
/* background-image: url(${ImgFundo}); */

`
export const BoxNameAndId = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-start;
    height: 60px;
`
export const Name = styled.h1`
    color: #FFFFFF;
    font-size: 32px;
    text-transform: capitalize;
`

export const Id = styled(Name)`
    font-size:16px;
`
export const ListType = styled(BoxNameAndId)`
    list-style: none;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap:10px;
`
export const LiType = styled(Name)`
    font-size:14px;
    background-color: ${(props) => props.bgColor};
    width: 150px;
    height: 30px;
    border-radius:4px;
    text-align:center;
    padding:7px;

`
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    margin-bottom:10px;
    z-index: 1;
`
export const ButtonDetalhes = styled.button`
    border:none;
    background-color: transparent;
    text-decoration:underline;
    cursor:pointer;
    text-transform: capitalize;

`
export const ButtonCapturar = styled.button`
    padding:10px;
    width: 150px;
    background-color: ${(props) => props.bgColor};
    cursor: pointer;
    border-radius: 8px;
    text-transform: capitalize;

`
export const ImgPoke = styled.img`
    height: 200px;
    width: 200px;
    position: relative;
    top:-280px;
    left: 30px;
    z-index: 1;
`
export const ContainerImgName = styled.div`
    display: flex;
    height: 70px;

`


export const BoxImagem = styled.div`
    width: 50%;
    height: 14vh;

`
export const ImgFundoPk = styled.img`
    position: relative;
    top:-20px;
    width: 250px;
    height: 200px;
    right: 39px;
    opacity: 100%;
`