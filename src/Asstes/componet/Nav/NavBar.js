import React from "react";
import {Container , Nav , Navbar , NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../../images/logo.png'
import { Link } from "react-router-dom";
 
const Navbars = () => {
    return (
        <Navbar expand="lg" className="bg-body-Secondary">
            <Container>
            <Navbar.Brand>
                <img src={logo} title="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Link to="/home" className="path activee">Home</Link>
                <Link to="/home" className="path activee">pages</Link>
                <Link to="/Contact" className="path activee">Services</Link>
                <Link to="/Contact" className="path activee">Blog</Link>
                <Link className="path" to="/Contact">Contact Us</Link>
                <div href="#home" className="awsome"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div href="#home" className="awsome"><i class="fa-solid fa-phone"></i> (+01) 999 888 777</div>
                <Nav.Link href="#home">
                    <button>
                        Contact Us 
                        <span> &gt; </span>
                    </button>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navbars;



