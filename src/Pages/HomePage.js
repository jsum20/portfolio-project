import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ParticleBackground from '../Particle/ParticleBackground';
import ReactTypical from '../Components/ReactTypical';

const HomePage = () => {

    return (
        <>
        

        <MainHeader>
            <h1>Edmund Ho</h1>
            <ParticleBackground />
        </MainHeader>

        <Typical>
        <ReactTypical />
        </Typical>

        <div className="portfolio-links">
            <Blog>
                <NavLink to="/blog" activeClassName="active-class" exact>Blog</NavLink>
            </Blog>

            <About>
                <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
            </About>

            <BottomContainer>
                <Education>
                    <NavLink to="/education" activeClassName="active-class" exact>Education</NavLink>
                </Education>

                <Work>
                    <NavLink to="/work" activeClassName="active-class" exact>Work</NavLink>
                </Work>
            </BottomContainer>
        </div>

        </>

    )
}

const MainHeader = styled.div`
    display:flex;
    justify-content:center;
    margin-top:10%;
    h1{
        color:var(--primary-color);
        font-size:8rem;

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
    position:absolute;
    bottom:2rem;
    left:0;
    right:0;
    width:100%;

    display:flex;
    justify-content:space-evenly;
`;

const Education = styled.div`
    transition: transform 0.5s;

    a{
        text-decoration:none;
        color:var(--secondary-color);
        font-size:1.3rem;

        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }
    }

    &:hover{
        transform: scale(1.1);
    }

`;

const Work = styled.div`
    transition: transform 0.5s;
    a{
        text-decoration:none;
        color:var(--secondary-color);
        font-size:1.3rem;
        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }
    }

    &:hover{
        transform: scale(1.1);
    }
`;

const About = styled.div`
    position:absolute;
    top:50%;
    transform: rotate(-90deg);
    left:2rem;
    z-index:1;
    transition: transform 0.5s;

    a{
        text-decoration:none;
        color:var(--secondary-color);
        font-size:1.3rem;
        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }
    }

    &:hover{
        transform: scale(1.1);
    }
`;

const Blog = styled.div`
    position:absolute;
    top:50%;
    right: 2rem;
    transform: rotate(90deg);
    z-index:1;
    transition: transform 0.5s;

    a{
        text-decoration:none;
        color:var(--secondary-color);
        font-size:1.3rem;
        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }
    }
    &:hover{
        transform: scale(1.1);
    }
`;

export default HomePage;
