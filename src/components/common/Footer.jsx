import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

const Footer = ({ theme }) => {

    let phoneNumber = '8563001092';
    let phoneURL = `tel:${phoneNumber}`;
    let whatsAppUrl = `https://wa.me/${phoneNumber}`;

    let contactItems = [
        { text: phoneNumber, url: whatsAppUrl, icon: <BsWhatsapp /> }, { text: phoneNumber, url: phoneURL, icon: <FiPhone /> },
    ];

    let listItemStyle = { listStyleType: 'none', padding: 0 };

    let linkStyle = (theme) => ({ color: theme === 'dark' ? 'white' : 'black', textDecoration: "none" });

    return (

        <div className={`pro-container footer ${theme}`}>
            <hr className={`hr-footer ${theme}`} />
            <Container className='pro-conent'>
                <Row>
                    <Col lg={4} md={6} sm={12} className='mt-4'>
                        <h3>Jay Prakash Singh</h3>
                        <p className='foot-text'>
                            I'm an energetic web developer with a sharp eye for ReactJS, endeavoring to make effective and
                            outwardly staggering programming arrangements with an IT foundation.
                        </p>
                        <ol style={listItemStyle}>
                            {contactItems.map((item, index) => (
                                <li key={index} style={{marginTop:"2%"}}>
                                    <a href={item.url} target="_blank" style={linkStyle(theme)}>
                                        {item.icon} &nbsp; +91-{item.text}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='mt-4'>
                        <h3>Social Links</h3>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='mt-4'>
                        <h3>Social Links</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer