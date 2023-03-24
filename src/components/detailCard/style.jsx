import styled from "styled-components";

export const ContainerDetail = styled(({className, children}) => {
  return <main className={className}>{children}</main>
})(() => `
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  position: relative;

  .ContainerDivDetail {
    transform: translateY(80px);
    padding-inline: 310px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .FirstContainer {
      display: flex;
      justify-content: space-evenly;
      gap: 50px;

      .TypesAndMoves {
        display: flex;
        flex-direction: column;
        gap: 37px;
      }

      .Moves {
        width: 272px;
        height: 423px;
        background-color: #fff;
        align-self: end;
        border-radius: 8px;
        padding: 18px;
      }
  
      .Moves > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
        margin-left: 3px;
      }
  
      .Moves > div > span {
        padding: 6px 0;
        width: 120px;
        background-color: #ECECEC;
        border-radius: 12px;
        text-align: center;
      }
  
      .Moves > div > span::first-letter {
        text-transform: uppercase;
      }
  
  
        h2 {
          margin-bottom: 13px;
        }

      .PokemonPictures {
        display: flex;
        flex-direction: column;
        gap: 18px;
        
        div {
          width: 267px;
          height: 279px;
          background-color: #fff;
          border-radius: 8px;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
  
      .BaseStats {
        padding: 19px 18px;
        width: 343px;
        height: 579px;
        background-color: #fff;
        border-radius: 12px;

        .BaseList {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
    
        .BaseList > li:nth-child(1) {
          margin-left: 20px;
        }
    
        .BaseList > li:nth-child(3) {
          margin-left: -10px;
        }
    
        .BaseList > li:nth-child(4) {
          margin-left: -4px;
        }
    
        .BaseList > li:nth-child(5) {
          margin-left: -5px;
        }
    
        .BaseList > li:nth-child(6) {
          margin-left: 1px;
        }
    
        .BaseList > li:nth-child(7) {
          margin-left: -81px;
        }
    
        .BaseList > li > span:nth-child(2) {
          font-weight: 700;
        }
    
        .BaseList > li {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }

  .Types {
    display: flex;
    flex-direction: column;
  }

  .Types > div {
    display: flex;
    gap: 20px;
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
    font-size: 42px;
    margin-bottom: 10px;
    color: #FFFFFF;

    ::first-letter {
      text-transform: uppercase;
    }
  }

  .PokemonImg {
    width: 620px;
  }

  .Details {
    display: flex;
    gap: 32px;
    width: 1389.14px;
    height: 633px;
    margin: auto;
    border-radius: 37.8857px;
    padding-block: 26px;
    padding-inline: 44px;

      

      
    }    
  }
`)

export const Bar = styled.span`
   --progress: ${props => props.var};
height: 7px;
width: 80px;
background-color: #ccc;
display: flex;
border-radius: 6px;


::before {
  content: "";
  width: calc(var(--progress) * 1%);
  background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
}
`