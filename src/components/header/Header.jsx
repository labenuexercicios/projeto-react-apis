import { useNavigate } from "react-router-dom";
import { goToPokedex, goToHome } from "../../router/Coordinator";

export default function Header({ calledFor }) {
  const navigate = useNavigate();
  return (
    <div className="flex h-44">
      <div className="flex grow-0 w-36 items-center justify-start ml-40">
        {calledFor == "pokedex" || calledFor == "details" ? (
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
        {calledFor == "details" ? (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Delete from pokédex
          </button>
        ) : (
          <div></div>
        )}
        {calledFor == "home" ? (
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
