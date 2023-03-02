import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage"
import { Pokedex } from "../Pages/Pokedex/Pokedex"
import { Details } from "../Pages/Details/Details"
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}