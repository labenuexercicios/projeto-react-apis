import styled from "styled-components";

export const PokedexContainer = styled(({className, children}) => {
  return <main className={className}>{children}</main>
})(() => `
background: linear-gradient(to bottom, #2C3E50, #3498DB);
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.ContainerPokedex {
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
  justify-content: space-evenly;
  padding-inline: 150px;
  padding-bottom: 52px;
}
`)

export const Title = styled(({className}) => {
  return (
    <h1 className={className}>Não há pokemons na sua pokédex ☹</h1>
  )
})(() => `
margin: 0 0 62px 221px;
transform: translate(-140px, -39px);
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 38px;
color: #FFFFFF;
text-transform: uppercase;
`)