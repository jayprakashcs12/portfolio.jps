import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LiaDownloadSolid } from "react-icons/lia";
import heroImg from "../../images/photo.png";
import { BioData } from "../../data/Info";
import { ReactTyped } from "react-typed";

const Home = ({ theme }) => {

    useEffect(() => { document.title = "Jay Prakash Singh"; }, []);

    let typoStyle = { color: theme === 'dark' ? '#854ce6' : '#155390' };

    return (
        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pro-row home-row'>
                    <Col md={6} sm={12}>
                        <h1 className='pro-head'>{BioData.fullName}</h1>
                        <p className="typo-text" style={typoStyle}>
                            <ReactTyped className="text-blue-700 font-bold" strings={BioData.roles} typeSpeed={40} backSpeed={50} loop={true} />
                        </p>
                        <p className='pro-data'>{BioData.description + "."}</p>
                        <Button className={`btn-down resume-btn ${theme}`} href={BioData.resume} target='display'>
                            <LiaDownloadSolid className="social-icon" />Download Resume</Button>
                    </Col>
                    <Col className='img-div' md={6} sm={12}>
                        <img src={heroImg} alt="profile" className='pro-img' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;