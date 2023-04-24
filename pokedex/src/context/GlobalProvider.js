import { useState } from 'react';
import { GlobalContext } from './GlobalContext';

const GlobalProvider = ({ children }) => {
    const [pageFlow, setPageFlow] = useState(1);
    const [pokedex, setPokedex] = useState([]);
    const [isOnPokedex, setIsOnPokedex] = useState(false);


    return (
        <GlobalContext.Provider
            value={{
                pageFlow,
                setPageFlow,
                pokedex,
                setPokedex,
                isOnPokedex,
                setIsOnPokedex,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
