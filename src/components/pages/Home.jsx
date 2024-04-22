import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';

const Home = ({ theme }) => {

    useEffect(() => {
        document.title = "Jay Prakash Singh";
    }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className='pro-conent'>
                <h1>Home</h1>
            </Container>
        </div>
    )

}

export default Home;