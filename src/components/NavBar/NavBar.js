import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                
                
                    <Navbar.Brand to="home">
                        <Link to="/">NavBar</Link>
                    </Navbar.Brand>
                    
                    <Nav className="me-auto">
                    <Nav.Link>
                            <Link to="/" className="title">NavBar</Link>
                        </Nav.Link>
                        
                        
                        <Nav.Link href="features">Features</Nav.Link>
                        <Nav.Link href="pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>



        </>
    )
}