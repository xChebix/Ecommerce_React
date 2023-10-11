import React from 'react';
import '../App.css'
import NavBar from "./navbar";
import Home from "./Home";
import Login from "./login";
import Register from "./register";
import {Routes, Route} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <div><NavBar /></div>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>
      </Routes>
      
    </div>
    
  );
  
}
export default App;