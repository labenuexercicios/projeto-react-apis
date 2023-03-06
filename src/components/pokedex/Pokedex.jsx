import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToPokedex } from "../../router/Coordinator";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { ContainerStyled, Pokemons } from "./Style";

export default function Pokedex() {
  const pathParams = useParams();
  const navigate = useNavigate();

  const [globaLimit, setGlobalLimit] = useState(20);
  const globalOffSet = !pathParams.pageIndex
    ? 0
    : pathParams.pageIndex * globaLimit;

  let [pokedex, setpokedex] = useState(
    JSON.parse(
      localStorage.getItem("pokedex") == null
        ? "[]"
        : localStorage.getItem("pokedex")
    )
  );

  const [count, setCount] = useState(pokedex.length);

  pokedex = pokedex.slice(globalOffSet, globaLimit + globalOffSet);

  const handlePageChange = (data) => {
    goToPokedex(navigate, data.selected);
  };

  console.log(pokedex);
  return (
    <ContainerStyled>
      <Pokemons>
        {pokedex?.map((url) => (
          <div key={url}>
            <Card url={url} />
          </div>
        ))}
      </Pokemons>
      <Pagination
        count={count}
        globaLimit={globaLimit}
        handlePageChange={handlePageChange}
        pageIndex={pathParams.pageIndex}
      />
    </ContainerStyled>
  );
}
