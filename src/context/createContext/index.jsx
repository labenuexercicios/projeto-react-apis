const { createContext } = require("react");

const initialState = {
  pokemons: []
}

export const Context = createContext(initialState)