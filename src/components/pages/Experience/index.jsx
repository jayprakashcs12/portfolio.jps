import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { WorkExperience, TimeThemes } from "../../../Data";
import { Container } from 'react-bootstrap';

const Experience = ({ theme }) => {

    useEffect(() => { document.title = "Experience | Jay Prakash Singh"; }, []);

    return (

        <div className={`pro-container ${theme}`}>
            <Container className="pro-content pages-content">
                <h1 className='pro-head skill-head mb-4'>Work Experience</h1>
                <VerticalTimeline>
                    {WorkExperience.map((work) => (
                        <VerticalTimelineElement key={work.id} icon={<WorkOutlineIcon />} className="vertical-timeline-element--work" date={work.date}
                            contentArrowStyle={TimeThemes[theme].contentArrow} contentStyle={TimeThemes[theme].content} iconStyle={TimeThemes[theme].content}>
                            <h3 className="vertical-timeline-element-title">{work.company}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{work.position}</h5>
                            <ul className='mt-2 unorder-list'>
                                {work.description.map((desc, i) => (
                                    <li key={i} style={{marginTop:"0.5rem"}}>{desc + "."}</li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </div>
    )
}

export default Experience;