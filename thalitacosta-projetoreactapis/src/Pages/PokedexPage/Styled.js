import styled from 'styled-components'

export const Container = styled.div `
    background-color: grey;
    height: 100vh;
`

export const Title = styled.h1 `
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-left: 40px;
    padding-top: 50px;
    padding-bottom: 50px;
`

export const CardsContainer = styled.div `
    margin-top: 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center;
`