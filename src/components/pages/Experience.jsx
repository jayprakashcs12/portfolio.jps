import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Container } from 'react-bootstrap';
import WorkIcon from '@mui/icons-material/Work';
import { WorkExperience } from "../../data/Info"

const Experience = ({ theme }) => {

    useEffect(() => {
        document.title = "Experience | Jay Prakash Singh";
    }, [])

    return (

        <div className={`pro-container ${theme}`}>
            <Container className="pro-content pages-content">
                <h1 className='pro-head skill-head mb-4'>Experience</h1>
                <VerticalTimeline>
                    {WorkExperience.map((work) => (
                        <VerticalTimelineElement key={work.id} icon={<WorkIcon />}
                            className="vertical-timeline-element--work" contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} date={work.date} 
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}>
                            <h3 className="vertical-timeline-element-title">{work.company}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{work.position}</h4>
                            {work.description.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))}
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </div>
    )

}

export default Experience;