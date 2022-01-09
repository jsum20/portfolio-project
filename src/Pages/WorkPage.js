import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import { WorkData } from '../data/WorkData';
import { VerticalTimeline ,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import BigTitle from '../Components/BigTitle';
import styled from "styled-components";
import GavelIcon from '@material-ui/icons/Gavel';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const WorkPage = () => {

    let lawIconStyle = {background: "#757de8"};
    let otherIconStyle = {background: "#757de8"};

    const work = <WorkIcon />

    const law = <GavelIcon />

    const other = <AccountBalanceIcon />

    return (
        <Box>
            <BigTitle text="Work Experience" icon={work} />

            <VerticalTimeline>
                {WorkData.map((element) => {

                    let isLawIcon = element.icon === "law";

                    return(
                        <VerticalTimelineElement 
                        key={element.id} 
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isLawIcon ? lawIconStyle : otherIconStyle}
                        icon={isLawIcon ? law : other}
                        >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                            <p className="description">{element.description}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </Box>
    )
}

const Box = styled.div`
background: var(--work-primary-box);
width: 100vw;
height:100vh;
position: relative;

    .date{
        color:var(--work-primary-color);
    }

    .vertical-timeline-element-content {
        box-shadow: 0 0.25em 0.5em 0 rgba(0,0,0,0.25), 0 0.4em 1.25em 0 rgba(0,0,0,0.15) !important;
    }

    #description{
        margin:1.5em 0 2em 0;
    }

    .vertical-timeline-element-title {
        color:var(--workcard-title-color);
    }

    .vertical-timeline-element-subtitle {
        color: var(--workcard-subtitle-color);
    }

    .description{
        color: var(--workcard-description-color);
        white-space: pre-wrap;
    }


`;




export default WorkPage;
