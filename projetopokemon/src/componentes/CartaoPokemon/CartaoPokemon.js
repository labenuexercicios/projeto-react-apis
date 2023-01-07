import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { irParaDetalhesPokemon } from "../../Rotas/coordinator";
import { CoresCartoes } from "../Tipos/PokemonCores";
import { useEffect, useState } from "react";
import { ColoracaoDosCards, Cards } from "./style";
import { TiposPokedex } from "../Tipos/Tipos";

export const CartoesPokemon = (props) => {     

  const navigate = useNavigate();

  const { pokemonurl, pokemon, addToPokedex, removeFromPokedex } = props;

  const [info, setInfo] = useState({});

  const location = useLocation();

  // console.log(pokemon)

  useEffect(() => {
    axios
      .get(pokemonurl)
      .then((response) => {
        setInfo(response.data);
        // console.log(response.data);
      })
      .catch((ERROR) => {
        console.log(ERROR);
      });
  }, []);
  console.log(info)
  const PokemonColorCards = ()=>{
    for (const color in info.types) {
      return info.types[color].type.name
        
      }
    }
  

  return (

    <Cards className="cartao10" >

      <ColoracaoDosCards color={CoresCartoes(PokemonColorCards())} >
        <p className="informacoesclassep">#0{info.id} </p>
        {/* <button className="pdetalhes">Detalhes</button> */}
        <p className="nomeclassep">{info.name} </p>
        <div className="tiposclassep">

          {info.types?.map((type) => {
            // console.log(type.type.name);
            return <img src={TiposPokedex(type.type.name)} />;

          })}
        </div>

       
        <img src={info.sprites?.other.dream_world.front_default} alt={info.name} className="pokeimg" />
      
      <div className="Button">
        {location.pathname === "/" ? (
            <button className="botaocartao" onClick={()=> addToPokedex(info)}>Capturar!</button>
          
          ):(
            <button className="botaodedeletar" onClick={() => removeFromPokedex(info)}>
            Excluir
          </button>
          )}

          <p className="pokedetalhes" onClick={()=> irParaDetalhesPokemon(navigate, info.name)}>Detalhes</p>
      
      </div>
      </ColoracaoDosCards>


    </Cards>
  );
};