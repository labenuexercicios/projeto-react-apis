import styled from "styled-components"

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
@media (max-width: 743px){
    height: 440px;
    width: 210px;
}

`
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    margin-bottom:10px;
    z-index: 1;
    @media (max-width: 743px){
        flex-direction: column;
        align-items: center;
        gap: 25px;
}
`
export const ButtonDetalhes = styled.button`
    border:none;
    background-color: transparent;
    text-decoration:underline;
    text-transform: capitalize;

`
export const ButtonCapturar = styled.button`
    padding:10px;
    width: 150px;
    background-color: ${(props) => props.bgColor};
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
       @media (max-width: 743px){
        left: -100px;
        top: -120px;
}
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
    @media (max-width:743px){
    left: -155px;
    top: 125px;
}
`