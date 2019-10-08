import React from 'react';
import './App.css';

import NavBar from './components/layout/NavBar';
import Slider from './components/layout/content/Slider';
import Card from './components/Cards/Card';
import Footer from './components/layout/Footer';
import VerMas from './components/layout/VerMas';



function App() {
  return (
    <>
      <NavBar/>
      <Slider/>
      <Card/>
      <VerMas/>
      <Footer/>
    </>
  );
}

export default App;
