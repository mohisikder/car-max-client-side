import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
   const {user, logout}= useAuth()
   return (
      <>
         <Navbar bg="light" expand="lg" className="shadow sticky-top">
            <Container>
               <Navbar.Brand href="/">CarMax</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                     <Nav.Link as={Link} to="/">Home</Nav.Link>
                     <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                     <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                     { user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                     { user?.email && <Nav.Link >{user?.email}</Nav.Link>}
                  </Nav>
                  {
                     user?.email ?
                     <Button onClick={logout} variant="danger">Logout</Button>
                     :
                     <Button variant="danger" size="sm"><Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link></Button>
                  }
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
};

export default Navigation;