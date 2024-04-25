import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BioData } from "../../data/Info";
import { ReactTyped } from "react-typed";
import { toast } from 'react-toastify';
import heroImg from "../../images/photo.avif";

const Home = ({ theme }) => {

    useEffect(() => {
        document.title = "Jay Prakash Singh";
    }, []);

    let typoStyle = { fontWeight: "600", fontSize: '25px', display: 'flex', gap: '12px', color: theme === 'dark' ? '#854ce6' : '#155390', lineHeight: '40px' };

    return (
        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pt-4 pb-4'>
                    <Col md={6} sm={12}>
                        <h1>{BioData.fullName}</h1>
                        <p style={typoStyle}> I am a
                            <ReactTyped className="text-blue-700 font-bold" strings={BioData.roles} typeSpeed={40} backSpeed={50} loop={true} />
                        </p>
                        <p className='pro-data'>{BioData.description}</p>
                        <Button className={`btn-down resume-btn ${theme}`} href={BioData.resume} target='display'>Download Resume</Button>
                    </Col>
                    <Col className='img-div pt-4 pb-4' md={6} sm={12}>
                        <img src={heroImg} alt="profile" className='pro-img' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;