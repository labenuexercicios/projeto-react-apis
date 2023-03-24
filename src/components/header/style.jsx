import styled, {keyframes} from 'styled-components'

const ImageAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(-20px);
  }
`;


export const HeaderContainer = styled(({ children, className }) => {
  return <header className={className}>{children}</header>
})(
  () => `
  background-color: #2C3E50;
  height: 160px;
  display: flex;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    left: 42%;
    width: 307px;
  }

  .pokedexBall {
    position: absolute;
  left: 85%;
  top: 18%;
  width: 110px;
height: 110px;
cursor: pointer;
  }

`
)

export const Image = styled.img`
  &:hover {
    animation: ${ImageAnimation} .5s ease-in-out;
    animation-iteration-count: 1;
  }
  
`;

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