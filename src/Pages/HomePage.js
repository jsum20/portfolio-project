import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ParticleBackground from '../Particle/ParticleBackground';
import ReactTypical from '../Components/ReactTypical';

const HomePage = () => {

    return (
        <MainWrapper>
        

        <MainHeader>
            <h1>Jason Sum</h1>
            <ParticleBackground />
        </MainHeader>

        <Typical>
        <ReactTypical />
        </Typical>

        <Info>
            <p>
                A software engineer based in London, UK. I'm currently working with Rentokil Initial on improving their Android applications. 
                Before this, I contributed to building banking products for helping millions of customers within financial difficulty at Lloyds Banking Group.
            </p>
        </Info>

        <div className="portfolio-links">
            <BottomContainer>
                <Education>
                    <NavLink to="/projects" activeClassName="active-class" exact>Personal Projects</NavLink>
                </Education>

                <Work>
                    <NavLink to="/work" activeClassName="active-class" exact>Work Experience</NavLink>
                </Work>
            </BottomContainer>
        </div>

        </MainWrapper>

    )
}

const MainWrapper = styled.div`
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    height:100%;
`;

const MainHeader = styled.div`
    display:flex;
    justify-content:center;
    margin-top:4%;
    h1{
        color:var(--primary-color);
        font-size:7rem;

        @media only screen and (max-width: 1200px) {
            font-size:6rem;
        }

        @media only screen and (max-width: 768px) {
            font-size:4rem;
        }

        @media only screen and (max-width: 500px) {
            font-size:1.5rem;
            margin-top:20%;
        }


    }
`;

const Typical = styled.div`
    display:flex;
    justify-content:center;
    font-size:2rem;
    color:var(--secondary-color);
    font-weight:600;
    padding-bottom:3rem;
    @media only screen and (max-width: 1200px) {
            font-size:1.5rem;
        }

        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }

        @media only screen and (max-width: 500px) {
            font-size:0.8rem;
        }
`;

const BottomContainer = styled.div`
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    bottom: 2rem; /* Position from the bottom */
    left: 0; /* Start from the left edge */
    right: 0; /* End at the right edge */
    margin: auto; /* Center the element horizontally */
    display:flex;
    justify-content:space-between;
    padding:1rem 1rem 1rem 1rem;
`;

const Education = styled.div`
    transition: transform 0.5s;
    a{
        text-decoration:none;
        color:var(--secondary-color);
        font-size:1.5rem;
        font-weight:600;

        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }
    }

    &:hover{
        transform: scale(1.2);
    }

`;

const Work = styled.div`
    transition: transform 0.5s;
    a{
        text-decoration:none;
        color:var(--secondary-color);
        font-size:1.5rem;
        font-weight:600;

        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }
    }

    &:hover{
        transform: scale(1.2);
    }
`;

const Info = styled.div`
    padding-top:2rem;
    p {
        font-size: 1.4rem;
        text-align:center;
        color: var(--primary-color);
        font-weight:700
    }
`

export default HomePage;
