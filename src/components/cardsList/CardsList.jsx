import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

import { goToHome } from "../../router/Coordinator";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

export default function CardsList() {
  const {
    pokemons,
    count,
    globaLimit,
    setCurrentPage,
    currentPage,
    isLoading,
  } = useContext(GlobalContext);
  const pathParams = useParams();

  useEffect(() => {
    setCurrentPage(pathParams.page ? pathParams.page : 1);
  }, [pathParams.page ? pathParams.page : 1]);

  const [pokedex, setPokedex] = useState(
    JSON.parse(
      localStorage.getItem("pokedex") == null
        ? "[]"
        : localStorage.getItem("pokedex")
    )
  );

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center flex-wrap">
      {isLoading ? (
        <>loading...</>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-5">
          {pokemons?.map((pokemon) => (
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
