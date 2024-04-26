import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { FaCodepen, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { BsStackOverflow, BsWhatsapp } from "react-icons/bs";
import { FiGithub, FiPhone } from "react-icons/fi";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";

const Footer = ({ theme }) => {

    let phoneNumber = '8563001092', personName = 'Github', phoneURL = `tel:${phoneNumber}`, 
    whatsAppUrl = `https://wa.me/${phoneNumber}`, gitHubUrl = `https://github.com/jayprakashcs12`,
    mainListStyle = { listStyleType: 'none', margin:0, padding: 0 },
    anchorStyle = { display: "flex", alignItems: "center" },
    iconFontSize = {fontSize: "20px"},
    listStyle = {marginTop: "2%"},
    contactItems = [
        { text: personName, url: gitHubUrl, icon: <FiGithub style={iconFontSize} /> }, 
        { text: phoneNumber, url: phoneURL, icon: <FiPhone style={iconFontSize} /> },
        { text: phoneNumber, url: whatsAppUrl, icon: <BsWhatsapp style={iconFontSize} /> }
    ],

    socialLinks = [
        { name: 'Facebook', icon: <RiFacebookLine style={iconFontSize} />, url: 'http://facebook.com' },
        { name: 'Twitter', icon: <FaXTwitter style={iconFontSize} />, url: 'http://twitter.com' },
        { name: 'Linkedin', icon: <RiLinkedinLine style={iconFontSize} />, url: 'http://linkedin.com' },
        { name: 'Instagram', icon: <FaInstagram style={iconFontSize} />, url: 'http://instagram.com' },
        { name: 'Codepen', icon: <FaCodepen style={iconFontSize} />, url: 'http://codepen.io' },
        { name: 'Stack Overflow', icon: <BsStackOverflow style={iconFontSize} />, url: 'http://stackoverflow.com' }
    ];

    return (

        <div className={`pro-container footer ${theme}`}>
            <hr className={`hr-footer ${theme}`} />
            <Container className='foot-content'>
                <Row>
                    <Col lg={4} md={6} sm={12} className='mb-2 mt-2'>
                        <h3>About Me</h3>
                        <p className='foot-text'>
                            I'm an energetic web developer with a sharp eye for ReactJS, endeavoring to make effective and
                            outwardly staggering programming arrangements with an IT foundation.
                        </p>
                        <ol style={mainListStyle}>
                            {contactItems.map((item, i) => (
                                <li key={i} style={listStyle}>
                                    <a href={item.url} target="_blank" rel="noreferrer noopener" className={`foot-link ${theme}`} style={anchorStyle}>
                                        {item.icon} &nbsp; {phoneNumber === item.text && '+91-'} {item.text}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </Col>
                    {[...Array(2)].map((_, i) => (
                        <Col lg={4} md={6} sm={12} className='mb-2 mt-2' key={i}>
                            <h3>Social Links</h3>
                            <ol style={mainListStyle}>
                                {socialLinks.slice(i * 3, i * 3 + 3).map((link, j) => (
                                    <li key={j} style={listStyle}>
                                        <a href={link.url} target="_blank" rel="noreferrer noopener" className={`foot-link ${theme}`} style={anchorStyle}>
                                            {link.icon} &nbsp; {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Footer;