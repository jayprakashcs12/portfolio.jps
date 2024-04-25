import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const Experience = ({ theme }) => {

    useEffect(() => {
        document.title = "Experience | Jay Prakash Singh";
    }, [])

    return (
        
        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <h1>Experience</h1>
            </Container>
        </div>
    )

}

export default Experience;