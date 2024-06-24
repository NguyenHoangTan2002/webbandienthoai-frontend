import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './layout/header-footer/Navbar';
import Footer from './layout/header-footer/Footer';
import HomePage from './layout/homepage/HomePage';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <HomePage></HomePage>
        <Footer></Footer>
    </div>
  );
}

export default App;
