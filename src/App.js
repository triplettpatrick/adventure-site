import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() { //functional component which uses 'react-router-dom' package to set up routing in a web application
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/services" exact element={<Services />}/>
          <Route path="/products" exact element={<Products />}/>
          <Route path="/sign-up" exact element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
