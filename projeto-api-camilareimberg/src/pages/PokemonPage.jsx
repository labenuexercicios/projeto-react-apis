import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { primerMayuscula } from '../helper/helper';
import { CardTypesInfo, CardTypesInfoSpan, ContainerImgPokemon, ContainerImgPokemonImg, ContainerInfoPokemon, ContainerInfoPokemonH1, ContainerStats, GroupInfo, GroupInfoP, HeaderMainPokemon, InfoPokemon, MainPokemon, NumberPokemon, ProgressBar, ProgressBar1, StatGroup, StatGroupSpan, Stats } from './styled';

export const PokemonPage = () => {
	const { getPokemonByID } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams();

	const fetchPokemon = async id => {
		const data = await getPokemonByID(id);
		setPokemon(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon(id);
	}, []);


	return (
		
		<MainPokemon>
			{loading ? (
				<Loader />
			) : (
				<>
					<HeaderMainPokemon>
						<NumberPokemon>#{pokemon.id}</NumberPokemon>
						<ContainerImgPokemon>
							<ContainerImgPokemonImg
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</ContainerImgPokemon>

						<ContainerInfoPokemon>
							<ContainerInfoPokemonH1>{primerMayuscula(pokemon.name)}</ContainerInfoPokemonH1>
							<CardTypesInfo>
								{pokemon.types.map(type => (
									<CardTypesInfoSpan key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</CardTypesInfoSpan>
								))}
							</CardTypesInfo>
							<InfoPokemon>
								< GroupInfo>
									<GroupInfoP>Altura</GroupInfoP>
									<span>{pokemon.height}</span>
								</ GroupInfo>
								< GroupInfo>
									<GroupInfoP>Peso</GroupInfoP>
									<span>{pokemon.weight}Kg</span>
								</ GroupInfo>
							</InfoPokemon>
						</ContainerInfoPokemon>
					</HeaderMainPokemon>

					<ContainerStats>
						<Stats>
						<h1>Base Stats</h1>
						
							<StatGroup>
								<StatGroupSpan>Hp</StatGroupSpan>
								<ProgressBar></ProgressBar>
								<span className='counter-stat'>
									{pokemon.stats[0].base_stat}
								</span>
							</StatGroup>
							<StatGroup>
								<StatGroupSpan>Attack</StatGroupSpan>
								<ProgressBar></ProgressBar>
								<span className='counter-stat'>
									{pokemon.stats[1].base_stat}
								</span>
							</StatGroup>
							<StatGroup>
								<StatGroupSpan>Defense</StatGroupSpan>
								<ProgressBar></ProgressBar>
								<span className='counter-stat'>
									{pokemon.stats[2].base_stat}
								</span>
							</StatGroup>
							<StatGroup>
								<StatGroupSpan>Special Attack</StatGroupSpan>
								<ProgressBar1></ProgressBar1>
								<span className='counter-stat'>
									{pokemon.stats[3].base_stat}
								</span>
							</StatGroup>
							<StatGroup>
								<StatGroupSpan>Special Defense</StatGroupSpan>
								<ProgressBar1></ProgressBar1>
								<span className='counter-stat'>
									{pokemon.stats[4].base_stat}
								</span>
							</StatGroup>
							<StatGroup>
								<StatGroupSpan>Speed</StatGroupSpan>
								<ProgressBar></ProgressBar>
								<span className='counter-stat'>
									{pokemon.stats[5].base_stat}
								</span>
							</StatGroup>
						</Stats>
					</ContainerStats>
				</>
			)}
		</MainPokemon>
	);
};
