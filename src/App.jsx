import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sabores from "./pages/Sabores"
import Sobre from "./pages/Sobre";
import Home from "./pages/Home/index";
export default function App(){
  return(
  
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
      <Route path='/sabores' element={<Sabores/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}