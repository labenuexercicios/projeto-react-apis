import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
  const [apiReturn, setApiReturn] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pagina, setPagina] = useState("home");
  const [details, setDetails] = useState([]);
  const [gotcha, setGotcha] = useState(false);
  const [alertRemove, setAlertRemove] = useState(false);

  //Função que verifica se o pokemon já existe na pokedex. Caso seja "false" ele faz o Push do pokemon para o estado.
  const adicionaPokedex = (pokemon) => {
    const copiaPokedex = [...pokedex];
    const verificacao = copiaPokedex.find((poke) => poke.id === pokemon.id);
    if (verificacao === undefined) {
      copiaPokedex.push(pokemon);
    }
    setPokedex(copiaPokedex);
  };

  //FUNÇÃO REMOVE POKEDEX
  const RemovePokemon = (pokemon) => {
    const verifica = pokedex.filter((poke) => poke.id !== pokemon.id);
    setPokedex(verifica);
  };

  //FUNÇÃO QUE FAZ A REQUISIÇÃO
  // const getPokemon = async (arrayEstado, estado) => {
  //   const copiaEstado = [...arrayEstado];
  //   let pegaId = 0;
  //   while (pegaId <= 20) {
  //     pegaId = pegaId + 1;
  //     try {
  //       const response = await axios.get(`
  //       https://pokeapi.co/api/v2/pokemon/${pegaId}
  //       `);
  //       //TRATAMENTO PARA PEGAR DADOS DE TIPO
  //       let arrayTypes = [];
  //       const objTypes = response.data.types;
  //       for (let j in objTypes) {
  //         let pegaTypes = objTypes[j].type.name;
  //         arrayTypes.push(pegaTypes);
  //         if (arrayTypes.length === 2) {
  //           break;
  //         }
  //       }
  //       //TRATAMENTO PARA PEGAR DADOS DE MOVIMENTOS
  //       let arrayMoves = [];
  //       const moves = response.data.moves;
  //       for (let j in moves) {
  //         let pegaMoves = moves[j].move.name;
  //         arrayMoves.push(pegaMoves);
  //         if (arrayMoves.length === 7) {
  //           break;
  //         }
  //       }

  //       copiaEstado.push({
  //         name: response.data.name,
  //         id: response.data.id,
  //         type: arrayTypes,
  //         img: response.data.sprites.other["official-artwork"].front_default,
  //         moves: arrayMoves,
  //         stats: response.data.stats,
  //         frontDetail:
  //           response.data.sprites.versions["generation-v"]["black-white"]
  //             .front_default,
  //         backDetail:
  //           response.data.sprites.versions["generation-v"]["black-white"]
  //             .back_default,
  //       });
  //       estado(copiaEstado);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   }
  // };

  const getPokemon = async (state, setState) => {
    const newState = [...state];
    for (let id = 1; id <= 21; id++) {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const types = data.types.slice(0, 2).map(({ type }) => type.name);
        const moves = data.moves.slice(0, 7).map(({ move }) => move.name);
        newState.push({
          name: data.name,
          id,
          type: types,
          img: data.sprites.other['official-artwork'].front_default,
          moves,
          stats: data.stats,
          frontDetail: data.sprites.versions['generation-v']['black-white'].front_default,
          backDetail: data.sprites.versions['generation-v']['black-white'].back_default,
        });
        setState(newState);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getPokemon(apiReturn, setApiReturn);
  }, []);

  const data = {
    pagina,
    setPagina,
    apiReturn,
    setApiReturn,
    pokedex,
    setPokedex,
    details,
    setDetails,
    alertRemove,
    setAlertRemove,
    gotcha,
    setGotcha,
    adicionaPokedex,
    RemovePokemon,
  };

  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
