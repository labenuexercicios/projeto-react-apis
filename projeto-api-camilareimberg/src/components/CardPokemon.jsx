import React from 'react';
import { Link } from 'react-router-dom';
import { CardImg, CardImgFoto, CardInfo, CardTypes, CardTypesSpan, Container, PokemonId } from './style';

export const CardPokemon = ({ pokemon }) => {
	return (
		//chamar o header aqui
		
					<Container>
				<CardImg>
				<CardInfo>
				<CardImgFoto
					src={pokemon.sprites.other.dream_world.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
							
				<PokemonId># {pokemon.id}</PokemonId>
				<PokemonId>{pokemon.name}</PokemonId>
				
				</CardInfo>
				
				<CardTypes>
					{pokemon.types.map(type => (
						<CardTypesSpan key={type.type.name} className={type.type.name}>
							{type.type.name}
						</CardTypesSpan>
					))}
				</CardTypes>
			
			<CardTypes>
			<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
					Detalhes
				</Link>
			<button>Capturar</button>
</CardTypes>
					</CardImg>
					</Container>
		
	);
};
