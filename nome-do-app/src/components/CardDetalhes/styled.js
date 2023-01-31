import styled from "styled-components"

export const Container = styled.div`
background-image: ${(props)=> props.bgImg};
height: 663px;
width: 1389.14px;
background-color: #729F92;
margin-top: 30px;
margin-bottom: 30px;
border-radius: 8px;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
@media (max-width:361px){
    flex-direction: column;
    width: 300px;
    gap: 2px;
}
`

export const ContainerImagens = styled.div`
height: 600px;
width: 310px;
margin-left: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
@media (max-width:361px) {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 10px;
    align-items: center;
    height: 150px;
}
`

export const ContainerBaseStats = styled.div`
height: 580px;
width: 25%;
background-color: #FFFFFF;
align-items: center;
justify-content: center;
border-radius: 8px;
padding: 10px;
@media (max-width:361px) {
    flex-direction: row;
    width: 71%;
    justify-content: center;
    margin-left: 17px;

}
`

export const DivImagem = styled.div`
background-color: #FFFFFF;
height: 282px;
width: 282px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
@media (max-width:361px) {
    width: 100px;
    height: 100px;
}
`

export const ListaStats = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: right;
    padding-left: 20px;
`

export const ContainerImgAndMoves = styled.div`
display: flex;
flex-direction: column;
height: 600px;
width: 400px;
padding: 10px;
border-radius: 8px;
padding: 10px;

`

export const NameContainer = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

`


export const ListaTipos = styled.ul`
    display: flex;
    list-style: none;
    gap: 15px;
`


export const BoxMoves = styled.div`
    height: 400px;
    width: 60%;
    background-color: #FFFFFF;
    list-style: none;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;

`


export const ImgPoke = styled.img`
    z-index: 10;
    position: absolute;
    top: 100px;
    left: 1150px;
    height: 330px;
    width: 330px;
`

export const LiMoves = styled.li`
    height: 37px;
    width: 300px;
    left: 814px;
    top: 656px;
    padding: 10px;
`

export const NameTxt = styled.h1`
    font-family: inter;
    size: 60px;
    color: white;
    text-transform: capitalize;
`


export const LiStats = styled.li`
`

export const ContainerProgressBar = styled.div`
    height: 24px;
    width: 150px;
    display: flex;
    align-items: center;
`

export const ContainerTr = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const ProgressBar = styled.div`
    height: 10px;
    width: ${(props) => props.width}%;
    background-color: #fca61d;
`

export const NameTh = styled.th` 
    width: 150px;
`

export const ListMoves = styled.li`
    background-color: #00000024;
    padding: 15px;
    border-radius: 8px;
    width: 120px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
`