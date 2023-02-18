import { AppRouter } from './AppRouter';
import { PokemonProvider } from './context/PokemonProvider';

function App() {
	return (
		<PokemonProvider>
			<AppRouter />
		</PokemonProvider>
	);
}

export default App;

