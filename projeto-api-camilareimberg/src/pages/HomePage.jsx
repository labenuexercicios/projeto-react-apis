import React, { useContext } from 'react';
import {PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { BtnLoadMore, Container, ContainerBtnLoadMore, IconFilter } from './styled';



export const HomePage = () => {

    const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

	return (
		<Container>
						<PokemonList />
            <ContainerBtnLoadMore>
                <BtnLoadMore onClick={onClickLoadMore}>
                    Carregar mais
                </BtnLoadMore>
            </ContainerBtnLoadMore>
		</Container>
	);
};
