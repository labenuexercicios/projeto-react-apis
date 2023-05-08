import styled from 'styled-components'


export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 21.13vh;
    width: 100vw;
    background-color: white;

    @media screen and (max-device-width : 480px) {
      display: flex;
      flex-direction: column;
      align-items: center; 
      height: 18vh;

    }
;
`

export const ImgLogo = styled.img`
    height: 75%;
    margin: 0 auto;

    &.pokedex {
     margin-left: 18.35vw;
    }

    &.list {
     margin-left: 39.1vw;
    }

    @media screen and (max-device-width : 480px) {
      height: 9vh;

      &.pokedex {
        margin: 0 0 1vh 0;
      }

      &.list {
        margin: 0 0 1vh 0;
      }
    }
`

export const BtnPokedex = styled.button`
    background-color: #33A4F5;
    height: 9.77vh;
    width: 37.91vh;
    color: white;
    border-radius: 8px;
    font-size: x-large;
    margin-right: 4vw;

    @media screen and (max-device-width : 480px) {
      height: 4.25vh;
      width: 10.5vh;
      font-size: small;
      margin: 0 auto;
    }
;
`

export const Link = styled.a`
    color: #1A1A1A;
    font-weight: 700;   
    text-decoration: underline;
    margin-left: 5.45vw;
    font-size: x-large;

    @media screen and (max-device-width : 480px) {
      font-size: 0.9rem;
      position: absolute;
      top: 1vh;
      left: 0vh;
      margin-left: 1vh;
    }
    
;
`
export const Span = styled.span`
    text-decoration: none;
`
export const BtnDel = styled.button`
    background-color:#FF6262;
    height: 9.77vh;
    width: 37.91vh;
    color: white;
    border-radius: 8px;
    font-size: x-large;
    font-weight: 100;
    margin-right: 4vw;
    
  @media screen and (max-width: 1500px) {
    font-size: larger;
  }

  @media screen and (max-device-width : 480px) {
      height: 4vh;
      width: 25vh;
      font-size: small;
      margin: 0 auto;
    }
;
`

export const BtnAdd = styled.button`
    background-color:#FF6262;
    height: 9.77vh;
    width: 37.91vh;
    color: white;
    border-radius: 8px;
    font-size: x-large;
    font-weight: 100;
    margin-right: 4vw;

    
  @media screen and (max-width: 1500px) {
    font-size: larger;
  }

  @media screen and (max-device-width : 480px) {
      height: 4vh;
      width: 25vh;
      font-size: small;
      margin: 0 auto;
    }
;
`