import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";
import { goToDetails } from "../../router/Coordinator";

export default function Card({ url, setPokedex }) {
  // const { setPokedex, pokedex, pokemon, getPokemon } = useContext(GlobalContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [pokemon, setPokemon] = useState([]);
  const getPokemon = async () => {
    try {
      const response = await axios.get(url);

      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon(url);
  }, []);

  const pokedex = JSON.parse(
    localStorage.getItem("pokedex") == null
      ? "[]"
      : localStorage.getItem("pokedex")
  );

  function getColor() {
    switch (pokemon?.types[0]?.type?.name) {
      case "bug":
        return "bg-bug";
      case "dark":
        return "bg-dark";
      case "dragon":
        return "bg-dragon";
      case "electric":
        return "bg-electric";
      case "fairy":
        return "bg-fairy";
      case "fighting":
        return "bg-fighting";
      case "fire":
        return "bg-fire";
      case "flying":
        return "bg-flying";
      case "ghost":
        return "bg-ghost";
      case "grass":
        return "bg-grass";
      case "ground":
        return "bg-ground";
      case "ice":
        return "bg-ice";
      case "normal":
        return "bg-normal";
      case "poison":
        return "bg-poison";
      case "psychic":
        return "bg-psychic";
      case "rock":
        return "bg-rock";
      case "steel":
        return "bg-steel";
      case "water":
        return "bg-water";
      default:
        return "bg-default";
    }
  }

  return (
    <div className="w-[440px] h-[250px] flex items-end">
      <div
        className={`flex flex-col w-[440px] h-[210px] 
        ${pokemon && pokemon?.types ? getColor() : "bg-default"}
        rounded-xl bg-right-top bg-no-repeat`}
        style={{ backgroundImage: "url('/images/Card-Background.png')" }}
      >
        <div className="flex w-[440px] h-[140px]">
          <div className="flex flex-col w-[50%] p-3 gap-2">
            <div className="flex flex-col">
              <p className="font-[inter] text-[16px] font-[700] leading-[19px] text-[white]">
                #{pokemon.id}
              </p>
              <p className="text-4xl font-[inter] text-[32px] font-[700] leading-[39px] text-[white]">
                {pokemon &&
                  pokemon.name &&
                  pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </p>
            </div>
            <div className="flex gap-3">
              {pokemon.types?.map((item) => (
                <img
                  key={item.type.name}
                  className="w-fit-content h-fit-content"
                  src={"/images/pokemon-types/" + item.type.name + ".png"}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end items-center w-[50%]">
            <img
              src={pokemon.sprites?.other["official-artwork"].front_default}
              alt=""
              className="h-[193px] w-[193px]"
            />
          </div>
        </div>

        <div className="w-[440px] h-[80px] flex items-center">
          <button
            className="w-20 h-10 font-[arial] text-[16px] font-[700] leading-[24px] mr-[10px] text-[white] underline"
            onClick={() =>
              goToDetails(navigate, encodeURIComponent(JSON.stringify(pokemon)))
            }
          >
            Details
          </button>

          <div className="h-[80px] w-[170px]"></div>

          {!isNaN(location.pathname.split("/")[1]) ? (
            !pokedex.some((pokemon) => pokemon == url) ? (
              <button
                className="flex justify-center items-center p-[10px] mb-[10px] w-[146px] h-[38px] rounded-[8px] bg-[white]"
                onClick={() => {
                  const pokedexExist = localStorage.getItem("pokedex");
                  const pokedexArray = JSON.parse(pokedexExist);

                  const newPokedex = [...pokedexArray, url];

                  localStorage.setItem("pokedex", JSON.stringify(newPokedex));
                  setPokedex(newPokedex);
                }}
              >
                Capture!
              </button>
            ) : (
              <button className="flex justify-center items-center p-[10px] mb-[10px] w-[146px] h-[38px] rounded-[8px] bg-[red]">
                Captured
              </button>
            )
          ) : location.pathname.indexOf("pokedex") > -1 ? (
            <button
              className="flex justify-center items-center p-[10px] mb-[10px] w-[146px] h-[38px] rounded-[8px] bg-[white]"
              onClick={() => {
                let auxPokedex = [...pokedex];
                auxPokedex.splice(auxPokedex.indexOf(url), 1);
                localStorage.setItem("pokedex", JSON.stringify(auxPokedex));
                setPokedex(auxPokedex);
              }}
            >
              Delete
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
