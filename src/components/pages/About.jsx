import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { JobSummary } from "../../data/Info";

const About = ({ theme }) => {

    useEffect(() => { document.title = "About Us | Jay Prakash Singh"; }, [])

    return (
        
        <div className={`pro-container ${theme}`}>
            <Container className="pro-content pages-content">
                <h1 className='pro-head'>{JobSummary.title}</h1>
                <ul className='mt-2 unorder-list'>
                    {JobSummary.description.map((item, i) => (
                        <li style={{paddingBottom:"5px"}} key={i}>{item + "."}</li>
                    ))}
                </ul>
            </Container>
        </div>
    )

}

export default About;