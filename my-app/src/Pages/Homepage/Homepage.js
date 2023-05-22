import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import "./Homepage.css";

function HomePage(props) {
    const { pokelist, addToPokedex, catchList, addToCatchList } = props;
    
    const filteredPokelist = () =>
        pokelist.filter(
            (pokemonInList) =>
                !catchList.find(
                    (pokemonInCatchList) => pokemonInList.name === pokemonInCatchList
                )
        );
    return (
        <div>
            <Navbar />
           {<section>
                {filteredPokelist().map((pokemon) => (
                    <Card
                        key={pokemon.url}
                        pokemonUrl={pokemon.url}
                        addToPokedex={addToPokedex}
                        addToCatchList={addToCatchList}
                    />
                ))}
            </section>}
        </div>
    );
}

export default HomePage;
