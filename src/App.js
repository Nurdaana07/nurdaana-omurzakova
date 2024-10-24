import React, { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import './App.css';



const App = () => {
  return (
      <>
      
      <Navbar />
          <div className="main-content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                 </Routes>
              </div>
          <Footer />
       </>
   );
};

export default App;
