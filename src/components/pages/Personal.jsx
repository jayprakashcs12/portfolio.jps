import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const Personal = ({ theme }) => {

    useEffect(() => {
        document.title = "Personal Info | Jay Prakash Singh";
    }, [])

    return (

        <div className={`pro-container ${theme}`}>
            {/* --bs-gutter-x:"0" */}
            <Container className='pro-conent'>
                <h1>Personal Info</h1>
            </Container>
        </div>
    )

}

export default Personal;