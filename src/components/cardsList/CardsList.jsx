import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToHome } from "../../router/Coordinator";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import "../../index.css";

export default function CardsList() {
  const pathParams = useParams();
  const [count, setCount] = useState(0);
  const [globaLimit, setGlobalLimit] = useState(20);
  const [currentPokemons, setCurrentPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(pathParams.page);

  useEffect(() => {
    setCurrentPage(pathParams.page);
  }, [pathParams.page]);

  const [pokedex, setPokedex] = useState(
    JSON.parse(
      localStorage.getItem("pokedex") == null
        ? "[]"
        : localStorage.getItem("pokedex")
    )
  );
  const [isLoading, setIsLoading] = useState(false);

  const globalOffSet = !pathParams.page
    ? 1
    : (pathParams.page - 1) * globaLimit;

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
  }, [pathParams.page, pokedex]);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-wrap">
      {isLoading ? (
        <>loading...</>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-5">
          {currentPokemons?.map((pokemon) => (
            <div key={pokemon.url}>
              <Card url={pokemon.url} setPokedex={setPokedex} />
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        total={count}
        limit={globaLimit}
        onPageChange={(page) => {
          setCurrentPage(page);
          goToHome(navigate, page);
        }}
      />
    </div>
  );
}
