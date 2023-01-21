import styled from "styled-components"


export const Body = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    width: 100%;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background: #DDDDDD;
    gap:100px;
    padding: 50px;
`

export const SectionPokemons = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;

`
