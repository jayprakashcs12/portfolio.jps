import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { ContactsItem, Contacts, SocialLinks } from "../../data/Info";

const Footer = ({ theme }) => {

    let mainListStyle = { listStyleType: 'none', margin: 0, padding: 0 },
    anchorStyle = { display: "flex", alignItems: "center" }, listStyle = { marginTop: "2%" };

    return (

        <div className={`pro-container footer ${theme}`}>
            <hr className={`hr-footer ${theme}`} />
            <Container className='foot-content'>
                <Row>
                    <Col lg={4} md={6} sm={12} className='mb-2 mt-2'>
                        <h3 className='pro-foot'>About Me</h3>
                        <p className='foot-text'>
                            I'm an energetic web developer with a sharp eye for ReactJS, endeavoring to make effective and
                            outwardly staggering programming arrangements with an IT foundation.
                        </p>
                        <ol style={mainListStyle}>
                            {ContactsItem.map((item, i) => (
                                <li key={i} style={listStyle}>
                                    <a href={item.url} target="_blank" rel="noreferrer noopener" className={`foot-link ${theme}`} style={anchorStyle}>
                                        {item.icon} {Contacts.phoneNumber === item.text && '+91-'} {item.text}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </Col>
                    {[...Array(2)].map((_, i) => (
                        <Col lg={4} md={6} sm={12} className='mb-2 mt-2' key={i}>
                            <h3 className='pro-foot'>Social Links</h3>
                            <ol style={mainListStyle}>
                                {SocialLinks.slice(i * 4, i * 4 + 4).map((link, j) => (
                                    <li key={j} style={listStyle}>
                                        <a href={link.url} target="_blank" rel="noreferrer noopener" className={`foot-link ${theme}`} style={anchorStyle}>
                                            {link.icon} {link.name}
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