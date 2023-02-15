import styled from 'styled-components'

export const Container = styled.div`
  display: flex; align-items: center; 
  justify-content: space-around; 
  padding: 1rem; 
  background-color: white; color: #fff;

  a{
    font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #1A1A1A;
width: 210px;
height: 36px;
left: 100px;
top: 62px;
text-decoration-line: underline;
  }

 

 
`

export const Title = styled.span`
font-size: 3rem; 
margin-left: 1rem;
font-weight: 700;
font-size: 24px;
line-height: 36px;
background-color: red;
`

export const Button = styled.button`
 cursor: pointer;
  align-items: center;
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  background:  #33A4F5;
  border-radius: 8px;
  border-style: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
font-size: 24px;
 
`

export const CatchButton = styled.button`
 font-family: 'Poppins', sans-serif;
 border-style: none;
   cursor: pointer;
  align-items: center;
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  background: ${(props) => props.background};
  color:  ${(props) => props.color};`
;

