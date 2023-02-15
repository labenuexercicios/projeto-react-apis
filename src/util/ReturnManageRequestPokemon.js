function type(res) {
    const t = [];
    if (res.data.types.length === 1) {
        t.push(res.data.types[0].type.name);
    } else {
        t.push(res.data.types[0].type.name);
        t.push(res.data.types[1].type.name);
    }

    return t;
}
function stats(res) {
    const s = [];
    res.data.stats.map((stat) => {
        s.push({
            name: stat.stat.name,
            base_stat: stat.base_stat,
        });
    });
    return s;
}

export function addValueRequestPokemon(res){
    const pokemon = {
        name: res.data.name,
        id: res.data.id,
        moves: [
             res.data.moves[0].move.name,
             res.data.moves[1].move.name,
             res.data.moves[2].move.name,
             res.data.moves[3].move.name,
        ],
        sprites: {
            frontDefault: res.data.sprites.front_default,
            backDefault: res.data.sprites.back_default,
            default: res.data.sprites.other.home.front_default
        },
        types: type(res), 
        stats: stats(res),
    }

     return pokemon

}

export function addValueToKeyRequestList(res) {
    const data = {
      count: res.data.count,
      next: res.data.next,
      previous: res.data.previous,
      results: res.data.results,
  
    };
    return data;
  }