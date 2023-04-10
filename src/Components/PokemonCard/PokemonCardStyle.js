import styled from "styled-components";

export const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
justify-items: center;


@media (max-width: 1780px) {
    display: flex;
    flex-direction: row;
    width: 32rem;
    
}
@media (max-width: 1625px) {
    display: flex;
    flex-direction: row;
    width: 28rem;
    
}
@media (max-width: 1392px) {
    display: flex;
    flex-direction: row;
    width: 26rem;
    
}
`;

export const Container = styled.div`
  padding: 16px;
  width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  min-height: 25vh;
  color: #ffffff;

  @media (max-width: 1625px) {
      min-height: 20vh;
}

  .left {
    display: flex;
    flex-direction: column;
    width: 40%;

    .pokemonName {
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 10px;
      font-family: 'Inter';
      font-style: normal;

      @media (max-width: 1625px) {
      font-size: 29px;
}
      @media (max-width: 1392px) {
      font-size: 25px;
}
    }
    p {
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 600;
      text-align: left;
      height: 2%;
      position: absolute;
      top: -5px;

      @media (max-width: 1625px) {
        top: -8px;
}
      @media (max-width: 1625px) {
        top: -10px;
}

    }

    button {
      color: white;
      text-decoration-line: underline;
      background: none;
      border: none;
      font-size: 20px;
      font-family: 'Poppins';
      font-style: normal;
      cursor: pointer;
      font-weight: 700;
      margin-top: 12.5rem;
      position: absolute;
      margin-right: 4rem;

      @media (max-width: 1625px) {
        margin-top: 9rem;
}
      @media (max-width: 430px) {
        margin-top: 7rem;
}
    }

    .types {
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      @media (max-width: 1625px) {
      z-index: 2;
}
    }
  }

  .right {
    display: flex;
    flex-direction: column;

    .pokemon {
      width: 240px;
      height: 240px;
      position: absolute;
      top: -4rem;
      left: 15rem;
      z-index: 2;

      @media (max-width: 1780px) {
      width: 225px;
      height: 225px;
      position: absolute;
      top: -4rem;
      left: 12rem;
      z-index: 2;
}
      @media (max-width: 1625px) {
      width: 180px;
      height: 180px;
      position: absolute;
      top: -4rem;
      left: 12rem;
      z-index: 2;
}
      @media (max-width: 1392px) {
      width: 150px;
      height: 150px;
      position: absolute;
      top: -4rem;
      left: 11rem;
      z-index: 2;
}
    }

    img {
      position: absolute;
      width: 280px;
      top: -2.5rem;
      left: 14.5rem;

      @media (max-width: 1780px) {
      position: absolute;
      width: 270px;
      top: -2rem;
      left: 11rem;
}
      @media (max-width: 1625px) {
      position: absolute;
      width: 210px;
      top: -1.6rem;
      left: 10rem;
      z-index: 0;
}
      @media (max-width: 1392px) {
      position: absolute;
      width: 200px;
      top: -1.6rem;
      left: 9rem;
      z-index: 0;
}
}
  }
  /* @media (max-width: 1780px) {
    width: 23rem;
    margin-right: 0.8rem;
} */

`

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 1392px) {
      width: 110px;
      height: 32px;
      font-size: 18px;
}

`

// export const Pokebola = styled.img`
//   position: absolute;
//   bottom: 0px;
//   width: 290px;
//   left: 220px;
//   top: -40px;
//   /* @media (max-width: 1780px) {
//     position: absolute;
//     width: 15rem;
//     margin-right: 50rem;
// } */

// `

