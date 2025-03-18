import React from 'react';
import { AboutUs, ContactsItem, Contacts, SocialLinks } from "../../../Data";
import { Col, Container, Row } from "react-bootstrap";

const Footer = ({ theme }) => {

    return (

        <div className={`pro-container footer ${theme}`}>
            <hr className={`hr-footer ${theme}`} />
            <Container className='foot-content'>
                <Row>
                    <Col lg={4} md={4} sm={12} className='mb-2 mt-2'>
                        <h3 className='pro-foot'>About Me</h3>
                        <p className='foot-text'>
                            {AboutUs.description}
                        </p>
                        <ol className="main-list-style">
                            {ContactsItem.map((item, i) => (
                                <li key={i} className="list-style">
                                    <a href={item.url} target="_blank" rel="noreferrer noopener" className={`foot-link ${theme}`}>
                                        {item.icon} {Contacts.phoneNumber === item.text && '+91-'} {item.text}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </Col>
                    {[...Array(2)].map((_, i) => (
                        <Col lg={4} md={4} sm={12} className='mb-2 mt-2' key={i}>
                            <h3 className='pro-foot'>Social Links</h3>
                            <ol className="main-list-style">
                                {SocialLinks.slice(i * 3, i * 3 + 3).map((link, j) => (
                                    <li key={j} className="list-style">
                                        <a href={link.url} target="_blank" rel="noreferrer noopener" className={`foot-link ${theme}`}>
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