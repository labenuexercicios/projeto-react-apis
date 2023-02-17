import styled from "styled-components";

export const P = styled.p``;
export const Img = styled.img``;
export const Title = styled.h1``;
export const Div = styled.div``;

export const Header = styled.header`
  display: flex;
  background-color: darkcyan;
  justify-content: space-around;
  height: 15vh;
  align-items: center;
  max-width: 100vw;
  box-sizing: border-box;
  ${Img} {
    height: 90%;
    cursor: pointer;
  }

  ${Title} {
    font-size: clamp(15px, 25px, 27px);
    color: white;
    text-transform: capitalize;
  }

  ${Div} {
    display: flex;
    align-items: center;
    height: 90%;
    position: relative;
    cursor: pointer;
    width: 8%;
    height: 100%;
    ${P} {
      font-size: 3rem;
      font-family: cursive;
      height: fit-content;
      padding: 8% 22%;
      border-radius: 0 15px 15px 0;
      margin: 0;
      font-weight: 600;
      line-height: 200%;
    }
    ${Img} {
      position: absolute;
      height: 80%;
      right: 80%;
      z-index: 1;
      top: 10px;
    }
  }
  @media (max-width: 600px) {
    justify-content: space-between;
    ${Title} {
      font-size: 25px;
      margin-right: 15%;
      display: none;
    }
    ${Div} {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 140px;
      ${P} {
        padding: 2% 8%;
        line-height: 1.7;
      }
      ${Img} {
        top: 20%;
        right: 79%;
        height: 55%;
        display: none;
      }
    }
  }
  /* @media */
`;
