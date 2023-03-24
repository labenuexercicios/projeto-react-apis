import styled from "styled-components";

export const HomeContainer = styled(({children, className}) => {
  return (
    <main className={className}>{children}</main>
  )
})(() => `
background: linear-gradient(to bottom, #2C3E50, #3498DB);
  flex: 1;
  
  .ContainerPokedex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    padding-inline: 150px;
    padding-bottom: 52px;
  }

  
`)

export const Title = styled(({className}) => {
  return (
    <h1 className={className}></h1>
  )
})(() => `
margin: 0 0 72px 221px;
transform: translateY(60px);
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;

color: #FFFFFF;
 
`)