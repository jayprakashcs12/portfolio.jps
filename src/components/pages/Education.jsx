import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';

const Education = ({ theme }) => {

    useEffect(() => {
        document.title = "Education | Jay Prakash Singh";
    }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pro-row'>
                    <h1>Education</h1>
                </Row>
            </Container>
        </div>
    )

}

export default Education;