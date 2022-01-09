import React from 'react';
import BigTitle from '../Components/BigTitle';
import SchoolIcon from '@material-ui/icons/School';
import {EducationData} from "../data/EducationData";
import styled from "styled-components";
import Timeline from '../Components/EducationTimeline';

const EducationPage = () => {

    const school = <SchoolIcon />

    return (
        <Box>
            <BigTitle text="Education" icon={school}/>

            <MainContent>
                {EducationData.map((element) => {
                    return (
                        <>
                        <Timeline year={element.year} title={element.title} subtitle={element.subtitle} text={element.text}/>
                        
                        </>
                        )
                })}

            </MainContent>

        </Box>
    )
}

const Box = styled.div`
background: var(--education-primary-box);
width: 100vw;
height:100vh;
position: relative;
`;

const MainContent = styled.div`
`;

export default EducationPage;
