import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-bottom: 1px solid black;
  height: 10vh;

  .header-button {
    display: flex;
    justify-content: center;
  }

  .logo {
    display: flex;
    justify-content: center;
  }

  .pokedex-link {
    background-color: #33a3f5;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 0.7em;
    width: 5em;
    padding: 0.8em 4em 0.8em 4em;
    text-align: center;
    border-radius: 5px
  }

  .list-link {
    text-decoration: none;
    font-weight: bold;
    font-size: 0.7em;
    width: 8em;
    padding: 0.8em 4em 0.8em 4em;
    text-align: center;
    border-radius: 5px
  }

  .list-link:visited {
    color: black
  }
`;
