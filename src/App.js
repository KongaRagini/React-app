// import React, { useState } from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import Register from './Register'; 
import LoginPage from './LoginPage';
import { Home } from './Pages/Home';
function App(){
  return(
    <>
    
    <Router>
      <Routes>
      <Route path='/' element={<Register/>}/>
     <Route path='/Login' element={<LoginPage/>}/>
     </Routes>
    </Router>
   
    
    </>
    
  );

}
export default App;

