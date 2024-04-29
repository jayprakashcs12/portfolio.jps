import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { EducationDetails } from "../../data/Info";
import WorkIcon from '@mui/icons-material/Work';
import { Container } from 'react-bootstrap';

const Education = ({ theme }) => {

    useEffect(() => { document.title = "Education | Jay Prakash Singh"; }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className="pro-content pages-content">
                <h1 className='pro-head skill-head mb-4'>Education Details</h1>
                <VerticalTimeline>
                    {EducationDetails.map((educ) => (
                        <VerticalTimelineElement key={educ.id} icon={<WorkIcon />}
                            className="vertical-timeline-element--work" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date={educ.date} 
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}>
                            <h3 className="vertical-timeline-element-title">{educ.id + "."}</h3>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </div>
    )

}

export default Education;