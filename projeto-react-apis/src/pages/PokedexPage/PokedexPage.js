import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Container, DivColumn, MainContainer, Title } from "./style";
import { OhNo } from "../../components/OhNo/OhNo";

export const PokedexPage = ({ pokedex, catchPokemon, releasePokemon, ohNo, setOhNo }) => {
  return (
    <>
    <Container>
      <Header />
      <MainContainer>
        <Title>Meus Pokémons</Title>
        <DivColumn>
          {pokedex.length === 0 ? (
            <div style={{display: "flex", alignItems: "center"}}>
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d6cfe44-5fe9-4aaf-9cde-700622aa927d/dccwm24-630b8838-739d-419f-9c32-68bf84d971ab.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkNmNmZTQ0LTVmZTktNGFhZi05Y2RlLTcwMDYyMmFhOTI3ZFwvZGNjd20yNC02MzBiODgzOC03MzlkLTQxOWYtOWMzMi02OGJmODRkOTcxYWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1mZ-5Fqcrt4-7f3p5jwNBvyoZpVX9aDtUTQKlollHNU" />
              <h1 style={{color:"white"}}>Catch me if you can!</h1>
            </div>
          ) : (
            pokedex.map((item) => {
              return (
                <Card
                  key={item.name}
                  url={item.url}
                  catchPokemon={catchPokemon}
                  releasePokemon={releasePokemon}
                />
              );
            })
          )}
        </DivColumn>
      </MainContainer>
      
    </Container>
    {ohNo ? <OhNo setOhNo={setOhNo}/> : null}
    </>
  );
};
