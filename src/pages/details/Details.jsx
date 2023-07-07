import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";

export default function Details() {
  const params = useParams();

  let [pokemon, setPokemon] = useState([
    JSON.parse(decodeURIComponent(params.pokemon)),
  ]);

  return (
    <div className="flex flex-col flex-1">
      <Header id={pokemon[0].id} />

      <div className="flex flex-col flex-1 m-[20px]">
        <p className="text-4xl font-[poppins] text-[48px] font-[700] leading-[72px] text-[white]">
          Details
        </p>
        <div
          className="flex flex-1 bg-right-bottom bg-no-repeat rounded-xl bg-[#729F92]"
          style={{ backgroundImage: "url('/images/Details-Background.png')" }}
        >
          <div className="flex flex-col items-center justify-center gap-10 w-[25%]">
            <div className="flex items-center h-[40%] w-[90%] justify-center rounded-xl bg-[white] ">
              <img src={pokemon[0].sprites.front_default} />
            </div>
            <div className="flex items-center h-[40%] w-[90%] justify-center rounded-xl bg-[white] ">
              <img src={pokemon[0].sprites.back_default} />
            </div>
          </div>
          <div className="flex items-center justify-center w-[25%]">
            <div className="w-[100%] h-[85%] rounded-xl bg-[white]">
              <p className="text-4xl font-[poppins] text-[35px] font-[700] leading-[72px] text-[black] m-5">
                Base stats
              </p>

              <div className="w-[90%]">
                {pokemon[0].stats.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-end items-center gap-5"
                  >
                    {item.stat.name + ": " + item.base_stat}
                    <div className="h-[10px] w-[40%] bg-red-600">
                      <div
                        className="h-[10px]  bg-[orange]"
                        style={{ width: `${item.base_stat}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[25%]">
            <div className="flex flex-col w-[90%] h-[85%] gap-4">
              <div className="flex flex-col">
                <p className="font-[inter] text-[16px] font-[700] leading-[19px] rounded-xl text-[white]">
                  #{pokemon[0].id}
                </p>
                <p className="text-4xl font-[inter] text-[32px] font-[700] leading-[39px] rounded-xl text-[white]">
                  {pokemon[0] &&
                    pokemon[0].name &&
                    pokemon[0].name[0].toUpperCase() + pokemon[0].name.slice(1)}
                </p>
              </div>
              <div className="flex gap-3">
                {pokemon[0].types?.map((item) => (
                  <img
                    key={item.type.name}
                    className="w-fit-content h-fit-content"
                    src={"/images/pokemon-types/" + item.type.name + ".png"}
                    alt=""
                  />
                ))}
              </div>
              <div className="flex flex-1 flex-col w-full rounded-xl bg-[white]">
                {pokemon[0].moves.slice(0, 4).map((item) => (
                  <div key={item.id} className="m-4">
                    {item.move.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center w-[25%]">
            <img
              src={pokemon[0].sprites?.other["official-artwork"].front_default}
              alt=""
              className="relative h-[270px] w-[270px] top-[-100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
