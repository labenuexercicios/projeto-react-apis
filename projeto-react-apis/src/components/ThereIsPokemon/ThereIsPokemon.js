export const ThereIsPokemon = (pokemon, pokedex) => {
  console.log(pokedex)
    if (pokedex === undefined) {
    console.log("ola")
    const aux = pokedex.filter((item) => {
      return item.name === pokemon;
    });
    if (!aux) {
      return true;
    } else {
      return false;
    }
  }
};
