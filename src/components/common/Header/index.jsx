import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { BioData, NavRoutes } from "../../../Data";
import { NavLink } from "react-router-dom";

const Header = ({ setTheme, theme }) => {

    let [expand, setExpand] = useState(false), darkToggle = () => { setTheme(theme === 'light' ? 'dark' : 'light'); },
    navLinkClassName = `pro-button ${theme} links nav-links`, navStyle = { fontWeight: "normal" };

    return (
        <Navbar expanded={expand} expand="lg" collapseOnSelect sticky="top" className={`pro-navbar main-navbar ${theme}`}>
            <Container className="nav-content" onClick={e => e.stopPropagation()}>
                <Navbar.Brand>
                    <h3 className={`pro-navbar ${theme} m-0`}> {BioData.fullName} </h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpand(!expand)} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        {NavRoutes.map((link, i) => (
                            <NavLink key={i} to={link.navTo} style={navStyle} className={navLinkClassName} 
                                onClick={() => setExpand(false)}>
                                {link.navText}
                            </NavLink>
                        ))}
                        <Nav.Link className={`pro-button ${theme}`} onClick={darkToggle}>{theme === 'light' ? <IoMoon /> : <IoSunnyOutline />}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;