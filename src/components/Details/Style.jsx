import styled from "styled-components"

export const DetailsMain = styled.main`
 background-color: gray;
  height: 85vh;
  padding: 30px;
`

export const DetailsNav = styled.nav`
  height: 30px;
  display: flex;
  justify-content: space-between;
`

export const DetaisContent = styled.section`
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

export const ImgContainer = styled.section`
  border-radius: 20px;
  width: 250px;
  height: 250px;
  background-color: white;
  margin: 10px;
  img{
    width: 100%
  }
`

export const StatusContainer = styled.section`
  border-radius: 20px;
  width: 250px;
  height: 540px;
  background-color: white;
  margin: 10px;
  padding: 15px;
  `

  export const ProgressBar = styled.div`
    height: 20px;
    font-size: 0.8em;
    font-weight: bold;
    color: white;
    text-align: center;
    border-radius: 10px;
  `

export const PokemonContainer = styled.section`
  /* Container */
  border-radius: 20px;
  width: 500px;
  height: 540px;
  /* background-color: white; */
  margin: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  /* items */
  color: #000;
`
export const TypeContainer = styled.section`
  display: flex;
  gap: 10px;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const RightContainer = styled.div`
  position: absolute;
  width: 210.73px;
  height: 210.73px;
  right: 330px;
  top: 100px;
`

export const PokemonDetailContainer = styled.div`
  position: relative;
  width: 200px;
  height: 380px;
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  overflow: scroll;
`

export const MovesDetail = styled.div`
  width: 150px;
  height: 35px;
  background-color: #ECECEC;
  border-radius: 20px;
  border: 1px dashed lightgray;

  margin: 5px;
  padding: 2px 10px;
  /* text-align: center; */
`