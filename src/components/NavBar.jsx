import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';
import ('../components/styles/Navbar.css')

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar bg="black" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='letters'>Movies App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  className='letters'/>
                    <Navbar.Collapse id="basic-navbar-nav" className='letters'>
                        <Nav className="me-auto letters">
                            <Nav.Link as={Link} to="/" className='letters'>Movies</Nav.Link>
                            <Nav.Link as={Link} to="/actors" className='letters'>Actors</Nav.Link>
                            <Nav.Link as={Link} to="/directors" className='letters'>Directors</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)} className='letters'>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};

export default NavBar;