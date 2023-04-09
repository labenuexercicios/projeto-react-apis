const typesList = {
        poison: '#AD61AE',
        grass: '#70B873',
        fire: '#F44900',
        flying: '#6892B0',
        water: '#33A4F5',
        bug: '#316520',
        normal: '#8A8A8A',
        dark: '#5C5365',
        dragon: '#0A6CBF',
        electric: '#F4D23B',
        fairy: '#EC8FE6',
        fighting: '#CE4069',
        ghost: '#5269AC',
        ground: '#D97745',
        ice: '#74CEC0',
        psychic: '#F67176',
        rock: '#C7B78B',
        steel: '#BBBBBB',
    }


const getTypeColor = (type) => {
    return typesList[type]
};

export default getTypeColor;
