import React , { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes,useLocation   } from 'react-router-dom';
import BgHome from './components/BgHome';
import NavBar from './components/NavBar';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Clinker from './components/Clinker';
import Furniture from './components/Furniture';


function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  
const AppRouter = () => {

    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <Routes>
                <Route path='/' exact  element={ <BgHome /> }  ></Route>
                <Route path='/products' element={<Products />} > </Route>
                <Route path='/furniture' element={<Furniture />} > </Route>
                <Route path='/clinker' element={<Clinker />} /> 
                <Route path='aboutUs' element={ <AboutUs />} />
                <Route path='contactUs' element={ <ContactUs />} />
               
            </Routes>
        </Router>
    )
};
export default AppRouter;