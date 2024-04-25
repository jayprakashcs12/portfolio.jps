import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';

const Personal = ({ theme }) => {

    useEffect(() => {
        document.title = "Personal Info | Jay Prakash Singh";
    }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pro-row'>
                    <h1>Personal Info</h1>
                </Row>
            </Container>
        </div>
    )

}

export default Personal;