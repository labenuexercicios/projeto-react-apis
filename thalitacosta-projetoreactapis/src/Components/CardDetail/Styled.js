import styled from 'styled-components'

export const Mainn = styled.div `
    background-color: grey;
    height: 100vh;
`

export const BlocoImagensPokemon = styled.div `
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

export const BlocoBaseStates = styled.div `
    background-color: white;
    border-radius: 10px;
    width: 23vw;
    display: flex;
    padding: 20px;
`

export const BlocoMoves = styled.div `
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 23vw;
    height: 30vw;
    display: flex;
    flex-direction: column;
    gap: 20px
`

export const BlocoDados = styled.div `
    width: 23vw;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40px
`

export const BlocoFotoPokemon = styled.div `
    width: 23vw;
`

export const BgImagePokemon = styled.div `
    background-color: white;
    width: 30vh;
    height: 30vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImagePokemon = styled.img `
    width: 20vh;
`
export const Dados = styled.div`
    color: white;
`;

export const Title = styled.h1 `
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-left: 40px;
    padding-top: 50px;
    padding-bottom: 50px;
`

export const ContainerDetails = styled.div `
    background-color: #729F92;
    width: 95vw;
    height: 70vh;
    border-radius: 30px;
    position: absolute;
    margin-left: 25px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    font-family: Arial, Helvetica, sans-serif;
`

export const PositionPokemon = styled.div `
    background-color: white;
    width: 15vw;
    height: 15vh;
`

export const NameMoves = styled.button `
    background-color: #ECECEC;
    font-size: 12px;
    border: none;
    
`
export const PokemonName = styled.h1`
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const FotoPokemonDireita = styled.img`
  width: 250px;
  height: 250px;
  position: absolute;
  top: -80px;
  right: 50px;
`;

export const Pokeball = styled.img `
    position: absolute;
    height:70vh;
    top: 0;
    right: 0;
`
