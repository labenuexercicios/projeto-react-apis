import styled from 'styled-components'

export const ContainerCardPokemon = styled(({ children, className }) => {
  return <div className={className}>{children}</div>
})(
  () => `
  width: 440px;
  height: 210px;
  margin-top: 55px;
  display: flex;
  

  
  

  div {
    position: relative;
    flex: 1;
    display: flex;
  justify-content: space-between;
  border-radius: 12px;
  
  }

 
    

    .PokemonImg {
      position: absolute;
      width: 193px;
      height: 193px;
      left: -60px;
      top: -53px;
    }

    .ContainerCapture {
      position: absolute;
      left: -15%;
      top: 75%;
      width: 146px;
height: 38px;
    }

    .Capture {
      width: 146px;
height: 38px;

background: #FFFFFF;
border-radius: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #0F0F0F;
border: none;
cursor: pointer;
    }

    .PokedexImg {
      position: absolute;
      width: 250.73px;
height: 210.73px;
      left: -105px;
    }
 
  

  .IdNameDetail {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    .DetailContainer {
      transform: translateY(41px);
      margin-left: 23px;

      .Detail {
        font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
      }
    }

    .infoIdNameDetail {
      
      display: flex;
      flex-direction: column;
      margin-left: 23px;
      margin-top: 25px;

      .Type {
        width: 10px;
        display: flex;
        gap: 6px;
      }

      .Id {
        font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;


color: #FFFFFF;
      }

      .Name {
        font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
margin-bottom: 10px;
color: #FFFFFF;

::first-letter {
  text-transform: uppercase;
}

      }
    }

    
  }

`
)