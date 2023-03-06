import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToHome } from "../../router/Coordinator";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { ContainerStyled, Pokemons, PaginationContainer } from "./Style";

export default function CardsList({ calledFor }) {
  const pathParams = useParams();

  const [count, setCount] = useState(0);
  const [globaLimit, setGlobalLimit] = useState(20);
  const [currentPokemons, setCurrentPokemons] = useState([]);
  const [pokedex, setpokedex] = useState(
    JSON.parse(
      localStorage.getItem("pokedex") == null
        ? "[]"
        : localStorage.getItem("pokedex")
    )
  );
  const [isLoading, setIsLoading] = useState(false);

  const globalOffSet = !pathParams.pageIndex
    ? 0
    : pathParams.pageIndex * globaLimit;

  const getPokemons = async (url) => {
    try {
      let response = await axios.get(url);
      setCount(response.data.count);
      setCurrentPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    setIsLoading(true);
    getPokemons(
      `https://pokeapi.co/api/v2/pokemon?limit=${globaLimit}&offset=${globalOffSet}`
    );
    setIsLoading(false);
  }, [pathParams.pageIndex, pokedex]);

  const navigate = useNavigate();

  return (
    <ContainerStyled>
      {isLoading ? (
        <>loading...</>
      ) : (
        <Pokemons>
          {currentPokemons?.map((pokemon) => (
            <div key={pokemon.url}>
              <Card url={pokemon.url} setpokedex={setpokedex} />
            </div>
          ))}
        </Pokemons>
      )}

      <Pagination
        count={count}
        globaLimit={globaLimit}
        goTo={goToHome}
        pageIndex={pathParams.pageIndex}
      />
    </ContainerStyled>
  );
}
