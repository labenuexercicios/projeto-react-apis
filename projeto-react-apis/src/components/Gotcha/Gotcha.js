import { BlackPage, Div } from "./style";

export const Gotcha = ({setGotcha}) => {
  return (
    <BlackPage onClick={()=> setGotcha(false)}>
      <Div>
        <h1>Gotcha!</h1>
        <h4>O Pokémon foi adicionado a sua Pokédex</h4>
      </Div>
    </BlackPage>
  );
};
