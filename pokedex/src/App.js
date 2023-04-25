import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {PokemonsListPage} from './pages/PokemonsListPage/PokemonsListPage'
import {PokedexPage} from './pages/PokedexPage/PokedexPage'
import {PokedexDetailPage} from './pages/PokedexDetailPage/PokedexDetailPage'

function App() {
  const [page, setPage] = useState('homepage')

  const changePage = (page) => setPage(page)

  const renderPage = () => {
    switch(page){
      case 'homepage':
        return <PokemonsListPage />
      
      case 'pokedexpage':
        return <PokedexPage />

      case 'detailpage':
        return <PokedexDetailPage />

    }

  }
   

  return (
    <div className="App">
      <Header 
        page={page}
        changePage={changePage}
        renderPage={renderPage}
        />

        {renderPage()}
    </div>
  );
}

export default App;
