import styled from "styled-components";

import pokebola from '../../img/types/pokebal.png'

export const CardContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  /* border: 1px solid black; */
  width: 440px;
  height: 210px;
  border-radius: 12px;
  padding: 10px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MainCardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`

export const LeftContainer = styled.div`
  position: relative;
`

export const RightContainer = styled.div`
  position: absolute;
  width: 210.73px;
  height: 210.73px;
  left: 254.37px;
  top: -62px;
`

export const CardLink = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Types = styled.section`
  display: flex;
  gap: 10px;
`