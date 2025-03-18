import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BioData, JobSummary } from "../../../Data";
import { LiaDownloadSolid } from "react-icons/lia";
import { ReactTyped } from "react-typed";

const Home = ({ theme }) => {

    useEffect(() => { document.title = "Jay Prakash Singh"; }, []);

    return (
        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pro-row home-row'>
                    <Col>
                        <h1 className='pro-head'>{BioData.fullName}</h1>
                        <p className="typo-text">
                            <ReactTyped className="text-blue-700 font-bold" strings={BioData.roles} typeSpeed={40} backSpeed={50} loop={true} />
                        </p>
                        <p className='pro-data'>{BioData.description + "."}</p>
                        <Button className={`btn-home resume-btn ${theme}`} href={BioData.resume} target='display'>
                            <LiaDownloadSolid className="social-icon" />Download Resume
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <h1 className='pro-head'>{JobSummary.title}</h1>
                    <ul className='mt-2 unorder-list'>
                        {JobSummary.description.map((item, i) => (
                            <li style={{paddingBottom:"5px", marginLeft:"15px"}} key={i}>{item + "."}</li>
                        ))}
                    </ul>
                </Row>
            </Container>
        </div>
    );
};

export default Home;