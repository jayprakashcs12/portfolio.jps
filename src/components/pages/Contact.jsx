import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const Contact = ({ theme }) => {

    useEffect(() => {
        document.title = "Contact Us | Jay Prakash Singh";
    }, [])

    return (
        
        <div className={`pro-container ${theme}`}>
            <Container className='pro-conent'>
                <h1>Contact Us</h1>
            </Container>
        </div>
    )

}

export default Contact;