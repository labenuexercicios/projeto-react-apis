const typeColorVariants = {
    normal: 'bg-types-normal',
    fire: 'bg-types-fire',
    water: 'bg-types-water',
    electric: 'bg-types-electric',
    grass: 'bg-types-grass',
    ice: 'bg-types-ice',
    fighting: 'bg-types-fighting',
    poison: 'bg-types-poison',
    ground: 'bg-types-ground',
    flying: 'bg-types-flying',
    psychic: 'bg-types-psychic',
    bug: 'bg-types-bug',
    rock: 'bg-types-rock',
    ghost: 'bg-types-ghost',
    dragon: 'bg-types-dragon',
    dark: 'bg-types-dark',
    steel: 'bg-types-steel',
    fairy: 'bg-types-fairy',
};

export const getColorVariant = (type) => {
    return typeColorVariants[type];
};
