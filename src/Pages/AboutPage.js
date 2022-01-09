import React from 'react';
import styled from "styled-components";
import AboutsContent from '../Components/AboutsContent';
import {AboutsData} from '../data/AboutsData';
import BigTitle from '../Components/BigTitle';

const AboutPage = () => {
    return (
        <Box>
            <AboutsContent data={AboutsData} />
            <BigTitle text="About Me"/>

            <ProfileImage>
                {AboutsData.map((element) => {
                    return(
                        <>
                        <div className="profile-image-container">
                            <img src={element.image} alt="profile"/>
                        </div>
                        </>
                    )
                })}

            </ProfileImage>
        </Box>
    )
}

const Box = styled.div`
background: var(--abouts-primary-box);
width: 100vw;
height:100vh;
position: relative;
`;

const ProfileImage = styled.div`
    .profile-image-container{
        position: absolute;
        top: 10%;
        right: 5%;
        width: 20vw;


        @media only screen and (max-width: 768px) {
                top:3%;
            }

        img{
            width: 100%;
            height: auto;
            border-radius:500px;
        }
`;



export default AboutPage;
