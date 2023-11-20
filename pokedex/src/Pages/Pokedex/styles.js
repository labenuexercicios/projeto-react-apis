import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction: column;
`

export const CardsContainer = styled.div`
    background: #5E5E5E;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center;    
`

export const Heading = styled.h1`
    background: #5E5E5E;
    color: white;
    padding-top: 25px;
    padding-left: 50px;    
`

export const Message = styled.h1`
    background: #5E5E5E;
    color: white;
    padding-top: 75px;
    padding-left: 50px;    
    width: 350%;
    height: 40vh;
    text-align: end;    
`