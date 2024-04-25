import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const About = ({ theme }) => {

    useEffect(() => {
        document.title = "About Us | Jay Prakash Singh";
    }, [])

    return (
        
        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <h1>About</h1>
            </Container>
        </div>
    )

}

export default About;