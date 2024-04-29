import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const Personal = ({ theme }) => {

    useEffect(() => { document.title = "Personal Info | Jay Prakash Singh"; }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className="pro-content pages-content">
                <h1 className='pro-head skill-head mb-4'>Personal Details</h1>
            </Container>
        </div>
    )

}

export default Personal;