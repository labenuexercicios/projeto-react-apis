import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import HomePage from "../pages/HomePage/HomePage";
import Pokedex from "../pages/Pokedex/Pokedex";
import Details from "../pages/Details/Details";

function Router (){
return (
     <Routes>
         <Route index element={<HomePage />}/>
         <Route path="*" element={<PageNotFound />}/>
         <Route path="/pokedex" element={<Pokedex/>}/>
         <Route path="/pokemon/:name" element={<Details/>}/> 
     </Routes>
 
   )
 }
 
 export default Router
 