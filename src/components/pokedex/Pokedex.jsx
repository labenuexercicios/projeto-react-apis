import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToPokedex } from "../../router/Coordinator";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

export default function Pokedex() {
  const pathParams = useParams();
  const navigate = useNavigate();

  const [globaLimit, setGlobalLimit] = useState(20);
  const [currentPage, setCurrentPage] = useState(pathParams.page);

  const [pokedex, setPokedex] = useState(
    JSON.parse(
      localStorage.getItem("pokedex") == null
        ? "[]"
        : localStorage.getItem("pokedex")
    )
  );

  const globalOffSet = !pathParams.page
    ? 1
    : (pathParams.page - 1) * globaLimit;

  useEffect(() => {
    setCurrentPage(pathParams.page);
  }, [pathParams.page, pokedex]);

  const auxPokedex = pokedex.slice(globalOffSet, globaLimit + globalOffSet);

  const [count, setCount] = useState(pokedex.length);

  return (
    <div className="flex flex-col items-center justify-center flex-wrap">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {auxPokedex?.map((url) => (
          <div key={url}>
            <Card url={url} setPokedex={setPokedex} />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={pathParams.page}
        total={count}
        limit={globaLimit}
        onPageChange={(page) => {
          setCurrentPage(page);
          goToPokedex(navigate, page);
        }}
      />
    </div>
  );
}
