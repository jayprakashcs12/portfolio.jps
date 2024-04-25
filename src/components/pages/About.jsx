import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';

const About = ({ theme }) => {

    useEffect(() => {
        document.title = "About Us | Jay Prakash Singh";
    }, [])

    return (
        
        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pro-row'>
                    <h1>About Us</h1>
                </Row>
            </Container>
        </div>
    )

}

export default About;