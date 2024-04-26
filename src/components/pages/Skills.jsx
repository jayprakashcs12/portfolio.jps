import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';

const Skills = ({ theme }) => {

    useEffect(() => {
        document.title = "Skills | Jay Prakash Singh";
    }, [])

    return (
        
        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pro-row'>
                    <h1 className='pro-head'>Skills</h1>
                </Row>
            </Container>
        </div>
    )

}

export default Skills;