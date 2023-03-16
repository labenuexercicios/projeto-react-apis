import styled from "@emotion/styled"

export const StyledPopUp = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 451px;
  height: 222px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 0 10px;
  z-index: 10;
`

export const StyledGotcha = styled.p`
    margin-top: 61px;
    font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
`

export const StyledP = styled.p`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
`

export const StyledX = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;