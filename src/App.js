import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import BgHome from './components/BgHome';
import AboutUs from './components/AboutUs';
import AppRouter from './Router';

function App() {
  return (
    <div>
      <AppRouter />
<Products />
      {/* <NavBar />
      <BgHome />
      <Products />
      <AboutUs /> */}
    </div>
  );
}

export default App;
