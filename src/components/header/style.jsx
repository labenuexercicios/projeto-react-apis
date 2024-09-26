import styled from 'styled-components'

export const HeaderContainer = styled(({ children, className }) => {
  return <header className={className}>{children}</header>
})(
  () => `
  background-color: #fff;
  height: 160px;
  display: flex;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    left: 42%;
    width: 307px;
  }
`
)

export const ButtonPokedex = styled(({children, className }) => {
  return <button className={className}>{children}</button>
})(
  () => `
  position: absolute;
  left: 82%;
  top: 27%;
  width: 287px;
height: 74px;
background: #33A4F5;
border-radius: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
cursor: pointer;
border: none;
`
)

export const ButtonAllPokemons = styled(({children, className }) => {
  return <button className={className}>{children}</button>
})(
  () => `
  position: absolute;
  height: 36px;
  left: 100px;
  top: 62px;
  font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-decoration-line: underline;
background-color: transparent;
border: none;
color: #1A1A1A;
cursor: pointer;
`
)


export const DeletePokemon = styled(({children, className }) => {
  return <button className={className}>{children}</button>
})(
  () => `
  position: absolute;
  left: 82%;
  top: 27%;
  width: 226px;
height: 57px;
padding: 4px 10px;
background: #FF6262;
border-radius: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
border: none;
cursor: pointer;
`
)