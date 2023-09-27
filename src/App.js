import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import BgHome from './components/BgHome';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div>
      
      <NavBar />
      <BgHome />
      <Products />
      <AboutUs />
    </div>
  );
}

export default App;
