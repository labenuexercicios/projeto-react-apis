import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";
import { goToPokedex, goToHome } from "../../router/Coordinator";

export default function Header({ id }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [pokedex, setPokedex] = useState(
    JSON.parse(
      localStorage.getItem("pokedex") == null
        ? "[]"
        : localStorage.getItem("pokedex")
    )
  );

  function deleteFromPokedex() {
    const auxPokedex = [...pokedex];
    const index = auxPokedex.findIndex(
      (item) => item.split("/")[item.split("/").length - 2] == id
    );
    auxPokedex.splice(index, 1);

    setPokedex(auxPokedex);
    localStorage.setItem("pokedex", JSON.stringify(auxPokedex));
  }
  const { baseUrl } = useContext(GlobalContext);

  function addToPokedex() {
    const auxPokedex = [...pokedex];
    auxPokedex.push(baseUrl + "/" + id + "/");
    localStorage.setItem("pokedex", JSON.stringify(auxPokedex));
    setPokedex(auxPokedex);
  }

  return (
    <div className="flex bg-[white]">
      <div className="flex grow-0 w-36 items-center justify-start ml-40">
        {location.pathname.indexOf("pokedex") > -1 ||
        location.pathname.indexOf("details") > -1 ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => goToHome(navigate, 1)}
          >
            All pokemons
          </button>
        ) : (
          <div className="h-12 w-24 ml-40"></div>
        )}
      </div>

      <div className="flex grow items-center justify-center">
        <img
          className="h-40"
          src="https://www.pngitem.com/pimgs/m/112-1121888_pokemon-logo-png-free-image-download-pokemon-logo.png"
          alt="Pokemon logo"
        />
      </div>

      <div className="flex grow-0 w-36 items-center justify-end mr-40">
        {location.pathname.indexOf("details") > -1 &&
        pokedex.some(
          (item) => item.split("/")[item.split("/").length - 2] == id
        ) ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={deleteFromPokedex}
          >
            Delete from pokédex
          </button>
        ) : location.pathname.indexOf("details") > -1 ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addToPokedex}
          >
            Add to pokédex
          </button>
        ) : (
          <></>
        )}
        {!isNaN(location.pathname.split("/")[1]) ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => goToPokedex(navigate, 1)}
          >
            Pokédex
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
