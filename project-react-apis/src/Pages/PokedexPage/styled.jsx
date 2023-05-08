import styled from 'styled-components'

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);  
    grid-template-rows: repeat(7, 1fr);   
    height: 280vh;
    width: 100%;
    background-color: #5E5E5E;
    padding-top: 10vh;

    @media screen and (max-device-width : 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 1vh;
      min-height: 100vh;
      height: 100%;
      width: 100%;
    }
;
`
export const Local = styled.div`
  background-color: #5E5E5E;
  width: 100%;
  height: 10vh;
  padding: 3em 0 0 4em;

  @media screen and (max-width: 1500px) {
    padding-left: 2em;
  }

  @media screen and (max-device-width : 480px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1em 0 0 2em;
      height: 8vh;
      width: 100%;
    }
  
`
export const Text = styled.h1`
  color: white;

  @media screen and (max-device-width : 480px) {
      font-size: x-large;
    }
`