import styled from "styled-components";

export const ContainerCard= styled.div`
    padding:16px;
    min-width:400px;
    max-width:440px;
    background-color:${(props)=>props.color};
    border-radius:12px;
    height:210px;
`
export const PokemonImg = styled.img`
    width: 193px;
    height: 193px;
    position:relative;
    left:200px;
    top: -220px;
    z-index: 2;
`

export const Pokeball = styled.img`
    width:210.73px;
    height:210.73px;
    position:relative;
    top:-410px;
    left:185px;
`
export const PokemonNumber = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`

export const CatchButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    background: #FFFFFF;
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    position:relative;
    top:10px;
    left:220px;
`

export const PokemonName =styled.h1`
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin-bottom:15px;
`

export const TypesContainer = styled.div`
  display:flex;
  gap: 4px;
`;

export const TypeImg = styled.img`
    height:31px;
    width:86px;
`

export const ButtonDetails = styled.button`
    width: 74px;
    height: 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-decoration-line: underline;
    color: white;
    position:relative;
    top:50px;
`