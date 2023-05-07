import { useState } from 'react';
import { GlobalContext } from './GlobalContext';

const GlobalProvider = ({ children }) => {
    const [pageFlow, setPageFlow] = useState(0);
    const [pokedex, setPokedex] = useState([]);
    const [isOnPokedex, setIsOnPokedex] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState({});

    return (
        <GlobalContext.Provider
            value={{
                pageFlow,
                setPageFlow,
                pokedex,
                setPokedex,
                isOnPokedex,
                setIsOnPokedex,
                currentPokemon,
                setCurrentPokemon,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
