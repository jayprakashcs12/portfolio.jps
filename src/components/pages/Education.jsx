import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { EducationDetails, TimeThemes } from "../../data/Info";
import { Container } from 'react-bootstrap';

const Education = ({ theme }) => {

    useEffect(() => { document.title = "Education | Jay Prakash Singh"; }, []);

    return (

        <div className={`pro-container ${theme}`}>
            <Container className="pro-content pages-content">
                <h1 className='pro-head skill-head mb-4'>Education Details</h1>
                <VerticalTimeline>
                    {EducationDetails.map((edu) => (
                        <VerticalTimelineElement key={edu.id} icon={<SchoolOutlinedIcon />} className="vertical-timeline-element--education" date={edu.date}
                            contentArrowStyle={TimeThemes[theme].contentArrow} contentStyle={TimeThemes[theme].content} iconStyle={TimeThemes[theme].content}>
                            <h3 className="vertical-timeline-element-title mb-2">{edu.degree} ({edu.field || edu.specialization})</h3>
                            <h5 className="vertical-timeline-element-subtitle">{edu.institution}</h5>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </div>
    )

}

export default Education;