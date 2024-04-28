import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WorkIcon from '@mui/icons-material/Work';

const Timeline = () => {

    let workExperience = [
        {
            id: 1,
            company: "Lobotus Technology",
            position: "UI Developer",
            date: "Jan-2021 - Dec-2023",
            description: ["Creative Direction", "User Experience", "Visual Design", "Project Management", "Team Leading"]
        },
        {
            id: 2,
            company: "Bangalore Softsell Pvt Ltd",
            position: "Junior Software Developer",
            date: "Oct-2019 - Mar-2021",
            description: ["Creative Direction", "User Experience", "Visual Design", "SEO", "Online Marketing"]
        },
        {
            id: 3,
            company: "Cybotrix Technology",
            position: "Web Developer",
            date: "Sept-2017 - Oct-2019",
            description: ["User Experience", "Visual Design"]
        }
    ];

    return (

        <VerticalTimeline>
            {workExperience.map((work) => (
                <VerticalTimelineElement
                    key={work.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={work.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">{work.company}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{work.position}</h4>
                    {work.description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default Timeline;