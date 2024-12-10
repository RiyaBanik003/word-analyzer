import './App.css';
import About from './nav/About';
import Navbar from './nav/Navbar';
import TextForm from './nav/TextForm';
import React from 'react';

function App() {

  return (
    <>
    <Navbar/>
    
     <div className="container py-5"><TextForm heading="Word Analyzer"/></div> 
    <About/>
    </>
  );
}

export default App;
