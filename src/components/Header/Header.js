import React from 'react';
import navLogo from '../../img/Dental-logo.png';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img className='nav-logo' src={navLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <span className='mx-2'>{user?.displayName}</span>
                            {user.email ? <Button onClick={logOut} variant='success' size='sm'>Logout</Button> : <Nav.Link as={Link} to="/register"><Button variant='success' size='sm'>SignUp</Button></Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;