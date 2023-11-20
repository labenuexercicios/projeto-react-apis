import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import { BotaoPokedex, ContainerHeader, ContainerHeaderImg } from '../pages/styled';
import { goToPokedex } from '../coordinator';

export const Navigation = () => {
	const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

	return (
		<>
		<ContainerHeader>
						<Link to='/' className='logo'>
					<ContainerHeaderImg
						src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
						alt='Logo Pokedex'
					/>
				</Link>	
					<BotaoPokedex onClick={() => goToPokedex(navigate)}>Pokedéx</BotaoPokedex>
	</ContainerHeader>
			<Outlet />
		
		</>
	);
};
