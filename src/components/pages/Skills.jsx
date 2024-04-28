import React, { useEffect } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { TechnicalSkills } from "../../data/Info";

const Skills = ({ theme }) => {

    useEffect(() => { document.title = "Skills | Jay Prakash Singh"; }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className='pro-content'>
                <Row className='pro-row'>
                    <h1 className='pro-head skill-head'>Technical Skills</h1>
                    <Col lg={2}></Col>
                    <Col>
                        <Row className="mt-3">
                            {TechnicalSkills.map((skill, i) => (
                                <Col key={i} lg={4} className="mb-2 mt-2">
                                    <Card>
                                        <Card.Header as="h4" className={`card-header ${theme}`}>{skill.category}</Card.Header>
                                        <ListGroup variant="flush">
                                            {skill.items.map((item, idx) => (
                                                <ListGroup.Item key={idx} className={`pro-list ${theme}`}>{item}</ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </div>
    )

}

export default Skills;