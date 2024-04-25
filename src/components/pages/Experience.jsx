import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';

const Experience = ({ theme }) => {

    useEffect(() => {
        document.title = "Experience | Jay Prakash Singh";
    }, [])

    return (
        
        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pro-row'>
                    <h1>Experience</h1>
                </Row>
            </Container>
        </div>
    )

}

export default Experience;