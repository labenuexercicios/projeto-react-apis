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
  useEffect(() => {
    setCurrentPage(pathParams.page);
  }, [pathParams.page]);
  const globalOffSet = !pathParams.page
    ? 1
    : (pathParams.page - 1) * globaLimit;

  let [pokedex, setpokedex] = useState(
    JSON.parse(
      localStorage.getItem("pokedex") == null
        ? "[]"
        : localStorage.getItem("pokedex")
    )
  );

  const [count, setCount] = useState(pokedex.length);

  pokedex = pokedex.slice(globalOffSet, globaLimit + globalOffSet);

  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex flex-wrap items-center justify-center gap-5">
        {pokedex?.map((url) => (
          <div key={url}>
            <Card url={url} />
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
