import { Link } from 'react-router-dom';
import { BotaoPokedex, ContainerHeader, ContainerHeaderImg } from '../pages/styled';

export const HeaderDetail = () => {

	return (
		<>
			<ContainerHeader>
				<Link to='/' className='logo'>
					<h1>Todos os Pokemóns</h1>
				</Link>
				<ContainerHeaderImg
					src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
					alt='Logo Pokedex'
				/>


				<Link to='/' className='logo'>
					<BotaoPokedex>Pokedéx</BotaoPokedex>
				</Link>

			</ContainerHeader>

		</>
	);
};
