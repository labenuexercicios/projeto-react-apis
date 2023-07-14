import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Pokedex from "../pages/Pokedex/Pokedex";
import Homepage from "../pages/Home/Homepage";
import DetailsCard from "../components/Cards/Details/DetailsCard";

const Navrout = () =>{
    return <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Homepage/>}/>
        <Route path='pokedex/:id' element={<Pokedex/>}/>
        <Route path='details/:id' element={<DetailsCard/>}/>
        </Routes> 
    };

export default Navrout;