import { BlackPage, Div } from "./style";

export const OhNo = ({setOhNo}) => {
  return (
    <BlackPage onClick={()=> setOhNo(false)}>
      <Div>
        <h1>Oh, no!</h1>
        <h4>O Pokémon foi removido da sua Pokédex</h4>
      </Div>
    </BlackPage>
  );
};
