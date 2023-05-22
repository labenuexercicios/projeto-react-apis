export const getColors = (types) => {
    
    switch (types) {
        case "bug":
           return `linear-gradient(12deg, rgba(168,200,60,1) 0%, rgba(199,220,135,1) 37%, rgba(168,200,60,1) 60%, rgba(217,237,190,1) 81%, rgba(168,200,60,1) 100%)`;
        case "dark":
            return `linear-gradient(124deg, rgba(62,62,62,1) 0%, rgba(119,119,119,1) 37%, rgba(62,62,62,1) 60%, rgba(158,158,158,1) 81%, rgba(62,62,62,1) 100%);`;
        case "dragon":
            return `linear-gradient(144deg, rgba(77,80,230,1) 0%, rgba(140,140,245,1) 37%, rgba(77,80,230,1) 60%, rgba(165,165,246,1) 81%, rgba(77,80,230,1) 100%)`;
        case "electric":
            return `linear-gradient(131deg, rgba(246,203,59,1) 0%, rgba(253,233,155,1) 37%, rgba(246,203,59,1) 60%, rgba(254,242,195,1) 81%, rgba(246,203,59,1) 100%)`;
        case "fairy":
            return `linear-gradient(14deg, rgba(233,182,228,1) 0%, rgba(242,215,236,1) 37%, rgba(233,182,228,1) 60%, rgba(247,232,243,1) 81%, rgba(233,182,228,1) 100%)`;
        case "fighting":
            return `linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(78,1,1,1) 30%, rgba(96,19,19,1) 53%, rgba(154,0,0,1) 72%)`;
        case "fire":
            return `linear-gradient(12deg, rgba(240,70,45,1) 0%, rgba(253,198,53,1) 21%, rgba(241,86,51,1) 37%, rgba(242,38,0,1) 60%, rgba(240,76,51,1) 83%, rgba(245,166,61,1) 92%, rgba(237,80,47,1) 100%)`;
        case "flying":
            return `linear-gradient(141deg, rgba(169,206,250,1) 0%, rgba(203,223,246,1) 37%, rgba(169,206,250,1) 60%, rgba(212,232,246,1) 81%, rgba(169,206,250,1) 100%)`;
        case "ghost":
            return `linear-gradient(124deg, rgba(112,78,130,1) 0%, rgba(159,140,176,1) 37%, rgba(112,78,130,1) 60%, rgba(184,167,202,1) 81%, rgba(112,78,130,1) 100%)`;
        case "grass":
            return `linear-gradient(36deg, rgba(119,180,77,1) 0%, rgba(212,221,65,1) 15%, rgba(117,179,82,1) 33%, rgba(100,140,0,1) 69%, rgba(169,207,75,1) 96%)`;
        case "ground":
            return `linear-gradient(14deg, rgba(167,84,0,1) 0%, rgba(200,155,0,1) 30%, rgba(119,79,0,1) 53%, rgba(154,114,0,1) 72%)`;
        case "ice":
            return `linear-gradient(108deg, rgba(169,215,245,1) 0%, rgba(214,233,246,1) 37%, rgba(169,215,245,1) 60%, rgba(227,239,246,1) 81%, rgba(169,215,245,1) 100%)`;
        case "normal":
            return `linear-gradient(78deg, rgba(188,185,179,1) 0%, rgba(221,218,209,1) 37%, rgba(188,185,179,1) 60%, rgba(222,217,209,1) 81%, rgba(188,185,179,1) 100%)`;
        case "poison":
            return `linear-gradient(46deg, rgba(61,0,103,1) 0%, rgba(0,80,42,1) 28%, rgba(105,45,156,1) 85%)`;
        case "psychic":
            return `linear-gradient(79deg, rgba(252,70,107,1) 0%, rgba(159,82,177,1) 28%, rgba(127,86,202,1) 76%, rgba(252,70,107,1) 100%)`;
        case "rock":
            return `linear-gradient(156deg, rgba(89,89,89,1) 1%, rgba(136,134,134,1) 28%, rgba(97,170,157,1) 53%, rgba(101,98,98,1) 75%)`;
        case "steel":
            return `linear-gradient(121deg, rgba(102,111,120,1) 14%, rgba(230,236,238,1) 39%, rgba(155,155,159,1) 62%, rgba(182,192,194,1) 99%)`;
        case "water":
            return `linear-gradient(124deg, rgba(4,166,224,1) 14%, rgba(189,213,221,1) 25%, rgba(2,139,189,1) 48%, rgba(175,211,224,1) 99%)`;
        default:
            break;
    }
};


