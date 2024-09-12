import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    color: white;
    text-transform: capitalize;
}

body {
    margin: 0;
    padding: 0;
}

.poison {
    background-color: #e0a7f6;
}

.grass {
    background-color: #729F92;
}

.fire {
    background-color: #EAAB7D;
}

.rock {
    background-color: #cec5ab;
}

.electric {
    background-color: rgb(224, 215, 90);
    color: black !important;
}

.bug {
    background-color: #6ea866;

}


.normal {
    background-color: #999898;
}

.fairy {
    background-color: rgba(255, 192, 203);
}

.water {
    background-color: #71C3FF;
}

.ground {
    background-color: #d48c61;
}

.fighting {
    background-color: #e07f9a;
}

.psychic {
    background-color: #f8979a;
}

.ghost {
    background-color: #6f80b3;
}

.ice {
    background-color: #95e0d5;
}

.dragon {
    background-color: #004170;
}

.steel {
    background-color: #dadada;
}

.dark {
    background-color: #867b91;
}

.flying{
    background-color: #8ba3b4;
}
`