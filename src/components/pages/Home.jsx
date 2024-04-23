import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Home = ({ theme }) => {

    useEffect(() => {
        document.title = "Jay Prakash Singh";
    }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className='pro-conent'>
                <h1>Home</h1>
                <Row>
                    <Col md={6} sm={12}>
                        <p className="about-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                        <p className="about-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                    </Col>
                    <Col md={6} sm={12}>
                        <p className="about-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                        <p className="about-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum dignissimos vitae ex ipsa ratione
                            tempora voluptatem sit perspiciatis reprehenderit? Officia, excepturi vel accusamus ipsa
                            necessitatibus dolore quae reiciendis minima aspernatur.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Home;