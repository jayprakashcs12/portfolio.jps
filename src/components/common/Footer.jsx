import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiPhone } from "react-icons/fi";

const Footer = ({ theme }) => {

    let phoneNumber = '8563001092';
    let personName = 'Jay Prakash Singh';
    let phoneURL = `tel:${phoneNumber}`;
    let whatsAppUrl = `https://wa.me/${phoneNumber}`;
    let gitHubUrl = `https://github.com/jayprakashcs12`;

    let contactItems = [
        { text: personName, url: gitHubUrl, icon: <FiGithub /> }, { text: phoneNumber, url: phoneURL, icon: <FiPhone /> },
        { text: phoneNumber, url: whatsAppUrl, icon: <BsWhatsapp /> }
    ];

    let listItemStyle = { listStyleType: 'none', padding: 0 };

    let linkStyle = (theme) => ({ color: theme === 'dark' ? '#ffffff' : '#6ca5c3', textDecoration: "none" });

    return (

        <div className={`pro-container footer ${theme}`}>
            <hr className={`hr-footer ${theme}`} />
            <Container className='pro-conent'>
                <Row>
                    <Col lg={4} md={6} sm={12} className='mt-4'>
                        <h3>About Me</h3>
                        <p className='foot-text'>
                            I'm an energetic web developer with a sharp eye for ReactJS, endeavoring to make effective and
                            outwardly staggering programming arrangements with an IT foundation.
                        </p>
                        <ol style={listItemStyle}>
                            {contactItems.map((item, index) => (
                                <li key={index} style={{marginTop:"2%"}}>
                                    <a href={item.url} target="_blank" className={`foot-link ${theme}`}>
                                        {item.icon} &nbsp; {phoneNumber === item.text && '+91-'} {item.text}
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