import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { TechnicalSkills, TimeThemes } from "../../../Data";
import { Container } from 'react-bootstrap';

const Skills = ({ theme }) => {

    useEffect(() => { document.title = "Skills | Jay Prakash Singh"; }, []);

    return (

        <div className={`pro-container ${theme}`}>
            <Container className="pro-content pages-content">
                <h1 className='pro-head skill-head mb-4'>Work Experience</h1>
                <VerticalTimeline>
                    {TechnicalSkills.map((skill, index) => (
                        <VerticalTimelineElement key={index} icon={<CodeOutlinedIcon />}  className="vertical-timeline-element--work" 
                            contentArrowStyle={TimeThemes[theme].contentArrow} contentStyle={TimeThemes[theme].content} iconStyle={TimeThemes[theme].content}>
                            <h3 className="vertical-timeline-element-title">{skill.category}</h3>
                            <ul className='mt-2 unorder-list'>
                                {skill.items.map((item, i) => (
                                    <li key={i} style={{ marginTop: "0.5rem" }}>{item}</li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </Container>
        </div>
    )
}

export default Skills;