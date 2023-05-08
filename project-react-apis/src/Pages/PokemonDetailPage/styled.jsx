import styled from 'styled-components'

export const Main = styled.main`
    height: 110vh;
    width: 100%;
    background-color: #5E5E5E;
    display: flex;
    justify-content: center;

    @media screen and (max-device-width : 480px) {
      height: 90vh;
    }
;
`
export const Local = styled.div`
  background-color: #5E5E5E;
  width: 100%;
  height: 10vh;
  padding: 3em 0 6.5em 4em;

  @media screen and (max-width: 1500px) {
    padding-left: 2em;
  } 

  @media screen and (max-device-width : 480px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1em 0 0 2em;
      height: 8vh;
    }
`

export const Text = styled.h1`
  color: white;

  @media screen and (max-device-width : 480px) {
      font-size: x-large;
    }
  
`
export const Container = styled.div`
  padding: 1em;
  width: 95%;  
  height: 90vh;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 1vh 0 0 0;
  color: #ffffff;
  border-radius: 38px;

  @media screen and (max-device-width : 480px) {
      width: 90vw;
      height: 85vh;
      border-radius: 16px;
      margin-left: 0;
    }
`

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;

  @media screen and (max-device-width : 480px) {
      font-size: 1rem
    }

`;

export const PokemonName = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;

  @media screen and (max-device-width : 480px) {
      font-size: 2rem
    }
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;

  @media screen and (max-width: 480px) {
    height: 1.8rem;
    border-radius: 6px;
  }
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;
export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 46em;
  
  @media screen and (max-width: 1500px) {
    height: 39em;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Pokemon = styled.img`
  width: 34vh;
  height: 34vh;
  position: absolute;
  top: -7.5rem;
  right: 6vh;
  z-index: 2;

  @media screen and (max-width: 480px) {
    display: none;
  }
`

export const MainData = styled.div`
  position: absolute;
  left: 105vh;

  @media screen and (max-width: 480px) {
    position: absolute;
    left: 2vh;
  }
`

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 84vh;
  width: 40vh;
  position: absolute;
  margin: 1vh 0 0 0;
  left: 4vh;

  @media screen and (max-width: 480px) {
    left: 28vh;
    height: 55vh;
  }
`

export const Img1 = styled.div`
  background-color: white;
  height: 40vh;
  width: 40vh;
  border-radius: 10px;
  margin: 0 0 2vh 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 22vh;
    width: 22vh
  }
`
export const Img = styled.img`
  height: 50h;
  width: 50vh;

  @media screen and (max-width: 480px) {
    height: 25vh;
    width: 25vh
  }
`
export const Img2 = styled.div`
  background-color: white;
  height: 40vh;
  width: 40vh;
  border-radius: 10px;
  margin: 2vh 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 22vh;
    width: 22vh
  }
`
export const StatsDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 84vh;
  width: 45vh;
  position: absolute;
  left: 50vh;
  margin: 1vh 0 0 0;
  background-color: white;
  border-radius: 12px;

  @media screen and (max-width: 480px) {
    left: 1.8vh;
    top: 53vh;
    height: 28vh;
    width: 48vh;
  }
`

export const Stats = styled.div`
  display: flex;
  width: 40vh;
  margin: 0 auto;
  margin-top: 1vh;
  font-size: 0.9rem;

  @media screen and (max-width: 480px) {
    
  }
`
export const Title = styled.p`
  color: black; 
  font-weight: 700;
  font-size: xx-large;
  margin: 2vh 0 1vh 2vh;

  @media screen and (max-device-width : 480px) {
    font-weight: 700;
    font-size: larger;
    margin: 1vh 0 0 2vh;
 }
  
`
export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 1vh 0 1vh;
  color: grey;
  
  @media screen and (max-device-width : 480px) {
    margin: 0 1vh 0 0vh;
 }
  
`
export const StatsNumber = styled.div`  
  color: black;
  width: 5vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const StatsChart = styled.div`
width: 60%;
display: flex;
flex-direction: column;
justify-content: space-around;
padding-bottom: 1.3rem;

  @media screen and (max-width: 480px) {
    width: 75%
  }
`

export const MovesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 60vh;
  width: 40vh;
  position: absolute;
  left: 105vh;
  top: 27vh;
  background-color: white;
  border-radius: 12px;

  @media screen and (max-width: 480px) {
    left: 1.8vh;
    top: 16vh;
    height: 35vh;
    width: 22vh;
  }
`
export const Moves = styled.div`
  border: 1px dashed rgba(0, 0, 0, 0.12); 
  padding: 1vh; 
  display: inline-block;
  margin: 2vh 0 0 2vh;
  border-radius: 14px;
  background-color: #ECECEC;

  @media screen and (max-device-width : 480px) {
    margin: 1.5vh 0 0 2vh;
 }
`




