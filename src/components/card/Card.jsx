import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../router/Coordinator";

export default function Card({ url, setPokedex }) {
  const navigate = useNavigate();

  let [pokemonResponse, setPokemonResponse] = useState([]);

  const getPokemon = async () => {
    try {
      const response = await axios.get(url);

      setPokemonResponse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  let pokedex = JSON.parse(localStorage.getItem("pokedex"));
  pokedex = pokedex == null ? [] : pokedex;
  return (
    <div className="w-[440px] h-[250px] flex items-end">
      <div
        className={`flex w-[440px] h-[210px] 
        ${
          pokemonResponse && pokemonResponse?.types
            ? "bg-" + pokemonResponse?.types[0]?.type?.name
            : "bg-default"
        } 
        rounded-xl bg-right-top bg-no-repeat`}
        style={{ backgroundImage: "url('/images/Background.png')" }}
      >
        <div className="flex flex-col w-[45%] p-3 gap-2">
          <div className="flex flex-col">
            <p>#{url.split("/")[url.split("/").length - 2]}</p>
            <p className="text-4xl">{pokemonResponse.name}</p>
          </div>
          <div className="flex gap-3">
            {pokemonResponse.types?.map((item) => (
              <img
                className="w-fit-content h-fit-content"
                src={"/images/pokemon-types/" + item.type.name + ".png"}
                alt=""
              />
            ))}
          </div>
          <button
            className="w-20 h-10 border-0 font-medium px-5 py-2.5 mr-2 mb-2 underline"
            onClick={() =>
              goToDetails(
                navigate,
                encodeURIComponent(JSON.stringify(pokemonResponse))
              )
            }
          >
            Details
          </button>
        </div>
        <div className="flex flex-col justify-end items-center w-[55%]">
          <img
            src={
              pokemonResponse.sprites?.other["official-artwork"].front_default
            }
            alt=""
            className="h-`[193px]` w-[193px]"
          />
          {!pokedex.some((pokemon) => pokemon == url) ? (
            <button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm w-[150px] h-[50px] px-5  py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={() => {
                pokedex.push(url);
                localStorage.setItem("pokedex", JSON.stringify(pokedex));
                setPokedex(pokedex);
              }}
            >
              Capture
            </button>
          ) : (
            <button className="text-gray-900 bg-red-600 border border-gray-300 font-medium rounded-lg w-[150px] h-[50px] px-5 py-2.5 mr-2 mb-2">
              Captured
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
