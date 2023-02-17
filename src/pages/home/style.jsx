import styled from "styled-components";

export const HomeContainer = styled(({children, className}) => {
  return (
    <main className={className}>{children}</main>
  )
})(() => `
  background-color: #5E5E5E;
  flex: 1;



  .ContainerPokedex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-inline: 150px;
    padding-bottom: 52px;
  }
`)

export const Title = styled(({className}) => {
  return (
    <h1 className={className}>Todos Pokémons</h1>
  )
})(() => `
margin: 0 0 62px 221px;
transform: translateY(60px);
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;

color: #FFFFFF;
 
`)