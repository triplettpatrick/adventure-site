import React from 'react';
import './App.css'; 
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home'

function App() { //functional component which uses 'react-router-dom' package to set up routing in a web application
  return (
    <>
      <Router>
        <Navbar /> 
        <Home />
        <Routes>
          <Route path="/" exact component={Home}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
