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