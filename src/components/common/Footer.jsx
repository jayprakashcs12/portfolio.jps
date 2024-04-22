import React from 'react';
import { Container } from "react-bootstrap";

const Footer = ({ theme }) => {

    return (

        <div className={`pro-container footer ${theme}`}>
            <Container className='pro-conent'>
                <h1>Footer</h1>
            </Container>
        </div>
    )
}

export default Footer