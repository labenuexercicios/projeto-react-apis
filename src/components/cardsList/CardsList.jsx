import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card/Card";
import { ContainerStyled } from "./Style";

export default function CardsList() {
  const [count, setCount] = useState(0);

  let [pagnatedPokemons, setPagnatedPokemons] = useState([]);
  const limit = 500;
  const [offSet, setOffSet] = useState(0);

  const getPokemons = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
        params: {
          limit: limit,
          offset: offSet,
        },
      });
      setCount(response.data.count);
      setPagnatedPokemons(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [offSet]);

  return (
    <ContainerStyled>
      {pagnatedPokemons.map((pokemon) => (
        <div key={pokemon.url}>
          <Card url={pokemon.url} />
        </div>
      ))}
      <button
        onClick={() =>
          offSet - limit >= 0 ? setOffSet(offSet - limit) : setOffSet(0)
        }
      >
        Previous
      </button>
      <button
        onClick={() =>
          offSet + limit <= count
            ? setOffSet(offSet + limit)
            : setOffSet(offSet)
        }
      >
        Next
      </button>
    </ContainerStyled>
  );
}
