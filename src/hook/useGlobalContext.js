import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error('Não está dentro do contexto');
  }

  return context;
};

export default useGlobalContext;
