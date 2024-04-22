import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { NavLink } from "react-router-dom";

const Header = ({ setTheme, theme }) => {

    let handleToggle = () => { setTheme(theme === 'light' ? 'dark' : 'light'); }
      
    let activeNavLinkStyle = { fontWeight: "bold" };

    let navLinkClassName = `pro-button ${theme} links nav-links`;

    let navLinkStyle = { fontWeight: "normal" };

    return (
        <Navbar expand="lg" className={`pro-navbar main-navbar ${theme}`} sticky="top">
            <Container className="nav-content">
                <Navbar.Brand>
                    <h3 className={`pro-navbar ${theme}`}>Jay Prakash Singh</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <NavLink to="/" style={isActive => isActive ? activeNavLinkStyle : navLinkStyle} className={navLinkClassName}>Home</NavLink>
                        <NavLink to="/about-us" style={isActive => isActive ? activeNavLinkStyle : navLinkStyle} className={navLinkClassName}>About Us</NavLink>
                        <NavLink to="/experience" style={isActive => isActive ? activeNavLinkStyle : navLinkStyle} className={navLinkClassName}>Experiece</NavLink>
                        <NavLink to="/education" style={isActive => isActive ? activeNavLinkStyle : navLinkStyle} className={navLinkClassName}>Education</NavLink>
                        <NavLink to="/contact-us" style={isActive => isActive ? activeNavLinkStyle : navLinkStyle} className={navLinkClassName}>Contact</NavLink>
                        <NavLink to="/personal-info" style={isActive => isActive ? activeNavLinkStyle : navLinkStyle} className={navLinkClassName}>Persoal Info</NavLink>
                        <Nav.Link className={`pro-button ${theme}`} onClick={handleToggle}>{theme === 'light' ? <IoMoon /> : <IoSunnyOutline />}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;