import React from 'react'

import './Nav.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

export default function NavBar() {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        console.log(language)
        i18n.changeLanguage(language).catch((error) => { console.error('error', error) });
    };


    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
            <Container>
                <Navbar.Brand >
               <Link to="/"> Sole Express</Link>     
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">



                        <Link to="/">Home</Link>


                        <Link to="/products">Products</Link>
                        <Link to="/aboutUs">About Us</Link>
                        <Link to="/aboutUs">Contact Us</Link>

                        
                        {/* <Nav.Link href="#link">Contact Us</Nav.Link> */}

                        <FontAwesomeIcon icon={faLanguage} onClick={() => changeLanguage('ar')} className='languages' />
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    )
}
