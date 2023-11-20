import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { Pokedex } from './pages/Pokedex';
import { PokemonPage } from './pages/PokemonPage';


export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<HomePage />} />
					<Route path='pokemon/:id' element={<PokemonPage />} />
					<Route path='/pokedex' element={<Pokedex />} />
				</Route>

				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};
