import styled from "styled-components";

export const Title = styled(({className, children}) => {
  return (
    <h1 className={className}>{children}</h1>
  )
})(() => `
width: 219.16px;
height: 72px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #000000;
margin: auto;
`)

export const Warning = styled(({className, children}) => {
  return (
    <h1 className={className}>{children}</h1>
  )
})(() => `
width: 337px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #000000;
`)