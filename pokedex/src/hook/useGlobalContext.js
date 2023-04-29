import { GlobalContext } from '@/context/GlobalContext';
import { useContext } from 'react';

const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (context === undefined) {
        throw new Error('Não está dentro do contexto');
    }

    return context;
};

export default useGlobalContext;
