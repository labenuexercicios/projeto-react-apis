const { GlobalContext } = require('@/contexts/globalContext');
const { useContext } = require('react');

const useGlobalConext = () => {
    const context = useContext(GlobalContext);

    if(context === undefined) {
        throw new Error('Não está dentro do contexto')
    }

    return context
};

export default useGlobalConext
