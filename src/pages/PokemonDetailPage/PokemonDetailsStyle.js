import styled from "styled-components";


export const PokemonDetailPageStyle = styled.main`

background-color: #5D5D5D;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
gap: 30px;
min-height: 90vh;
color: #FFFFFF;

h1{
  align-self: flex-start;
  font-family: 'Poppins';
  font-size: 38px;
}`


export const CardDetails = styled.section`
  width: 1389.14px;
  height: 663px;
  border-radius: 37.89px;
  font-family: "Inter", sans-serif;

  background-color: #729f92;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;

  .details-columm {
    height: 663px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    #img-pokemon{
      width: 24%;
    }

    h1 {
      font-weight: 700;
      font-size: 48px;
    }
    h2 {
      font-weight: 700;
      font-size: 16px;
    }

    table {
      .stat-title {
        color: gray;
        width: 50px;
        text-align: end;
      }

      .stat-number {
        color: black;
        font-weight: 700;
        width: 20%;
        text-align: center;
      }
      .stat-progress {
        width: 100%;
      }

      td {
        font-size: 12px;
        font-weight: 400;
        height: 30px;
      }
      tr {
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;
      }
    }
  }

  .details-columm-title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: auto;
    h1 {
        margin: 0 auto;
    }
  }

  .pokemon-type {
    display: flex;
    gap: 16px;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: auto;
  }
`;

export const MovesTypes = styled.li`

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: fit-content;
  height: 20px;
  background: #ececec;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  margin: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: black;
  text-transform: capitalize;
`;
