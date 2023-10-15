import React from 'react'
import { BrowserRouter as Router, Route, Routes,Switch  } from 'react-router-dom';
import BgHome from './components/BgHome';
import NavBar from './components/NavBar';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
const AppRouter = () => {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/'element={ <BgHome /> }  ></Route>
                <Route path='/products' element={<Products />} /> 
                <Route path='aboutUs' element={ <AboutUs />} />
            </Routes>
        </Router>
    )
};
export default AppRouter;