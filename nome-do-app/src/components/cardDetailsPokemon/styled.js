import styled from "styled-components"

export const Container = styled.div`
    border: 2px solid;
    height: 663px;
    width: 100%;
    display:flex;
    justify-content: flex-start;
    border-radius:37.89px;
    background-color: ${(props) => props.bgColor};
`
export const ContainerImagens = styled.div`
    border: 2px solid;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`

export const ContainerStats = styled(ContainerImagens)`
`

export const ContainerNameMoves = styled(ContainerImagens)`
`


export const Imgens = styled.div`
    height: 268px;
    width: 268px;
`


export const Imagen = styled.img`

`
