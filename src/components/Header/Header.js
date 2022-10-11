import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>

            {/* navbar start */}
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container >
                    <Navbar.Brand href="#">TechQuiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='home' >Home</Nav.Link>
                            <Nav.Link as={Link} to='statistics'>Statistics</Nav.Link>
                            <Nav.Link as={Link} to='blog'>Blog</Nav.Link>
                            <Nav.Link as={Link} to='about'>About</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* navbar end */}

        </div>
    );
};

export default Header;