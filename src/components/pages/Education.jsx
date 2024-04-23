import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const Education = ({ theme }) => {

    useEffect(() => {
        document.title = "Education | Jay Prakash Singh";
    }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className='pro-conent'>
                <h1>Education</h1>
            </Container>
        </div>
    )

}

export default Education;