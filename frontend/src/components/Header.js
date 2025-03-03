import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect className='mb-5 py-3 shadow-sm bg-dark'> 
            <Container>
                <Navbar.Brand href='/'>MyEdificio App</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link href='/'>Inicio</Nav.Link>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;