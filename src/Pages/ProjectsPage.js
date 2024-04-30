import React from 'react';
import BigTitle from '../Components/BigTitle';
import SchoolIcon from '@material-ui/icons/School';
import {EducationData} from "../data/EducationData";
import styled from "styled-components";
import Timeline from '../Components/EducationTimeline';
import ParticleBackground from '../Particle/ParticleBackground';

const ProjectsPage = () => {

    const school = <SchoolIcon />

    return (
        <Box>
            <TitleWrapper>
                <BigTitle text="Projects" icon={school}/>
                <ParticleBackground />
            </TitleWrapper>

            <MainContent>
                {EducationData.map((element) => {
                    return (
                        <>
                        {/* rgb(15 23 42/var(--tw-bg-opacity)) */}
                        <Timeline link = {element.link}image={element.image} subtitle={element.subtitle} text={element.text}/>
                        </>
                        )
                })}

            </MainContent>

        </Box>
    )
}

const TitleWrapper = styled.div`
    display:flex;
    justify-content:center;
`;

const Box = styled.div`
max-width: 36rem;
margin-left: auto;
margin-right: auto;
`;

const MainContent = styled.div`
`;

export default ProjectsPage;
