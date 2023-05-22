import Navbar from "../../Components/Navbar/Navbar";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Details.css"

function Details(props) {
    const { pokedex, addToPokedex, removeFromPokedex } = props;
    const { pokemonName } = useParams();
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const pokemonId = localStorage.getItem('pokemonId');
    useEffect(() => {
        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const data = await response.json();
            setCurrentPokemon(data);
        }
        fetchPokemon();
    }, [pokemonId]);

    if (!currentPokemon) {
        return <div>Loading...</div>;
    }
    const pokemon = pokedex.find(p => p.name === pokemonName);
    console.log(pokemon)
    return (
        <div>
            <Navbar />
            <div className="sectionDetails">
                <div className="detailsTitle"><a>Details</a></div>
                <DetailsCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    addToPokedex={addToPokedex}
                    removeFromPokedex={removeFromPokedex}
                />
            </div>
            
        </div>
    );
}

export default Details;