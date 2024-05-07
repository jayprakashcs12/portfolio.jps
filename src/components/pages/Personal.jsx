import React, { useEffect } from 'react'
import { PersonalDetails } from "../../data/Info";
import { Col, Container, Row, Table } from 'react-bootstrap';

const Personal = ({ theme }) => {

    useEffect(() => { document.title = "Personal Info | Jay Prakash Singh"; }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className="pro-content">
                <Row className="pro-row">
                    <h1 className='pro-head skill-head mb-2'>Personal Details</h1>
                    <p className='text-center mb-3'>Please find my personal details...</p>
                    <Col lg={2}></Col>
                    <Col>
                        <Row>
                            <Table responsive bordered>
                                <tbody>
                                    {PersonalDetails.map((item, index) => (
                                        <tr key={index}>
                                            <td className={`pro-table ${theme}`}>{item.key}</td>
                                            <td className={`pro-table ${theme}`}>{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Personal;