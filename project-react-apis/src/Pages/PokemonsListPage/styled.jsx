import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);     
    height: 270vh;
    width: 100%;
    background-color: #5E5E5E;
;
`
export const Local = styled.div`
  background-color: #5E5E5E;
  width: 100%;
  height: 10vh;
  padding: 3em 0 6.5em 4em;

  @media screen and (max-width: 1600px) {
    padding-left: 2em;
  }
  
`

export const Text = styled.h1`
  color: white;
  
`