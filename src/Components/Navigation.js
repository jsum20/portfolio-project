import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
        <NavigationStyled>
            <div className="nav-icons">
                <a target="_blank" href="https://www.instagram.com/picsbyjase/">
                    <InstagramIcon className="instagram-icon"/>
                </a>
                <a target="_blank" href="https://github.com/jsum20">
                    <GitHubIcon className="github-icon"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/jason-sum/">
                    <LinkedInIcon className="linkedin-icon"/>
                </a>
                
            </div>  

            <div className="home-icon-container">
                <NavLink to="/">
                    <HomeIcon className="home-icon"/>
                </NavLink>
            </div>

            <ContactMeStyled>
                <button onClick={() => window.location = 'mailto:jasonsum321@gmail.com'}>Contact Me</button>
            </ContactMeStyled>


        </NavigationStyled>

        </>
    )
}

const NavigationStyled = styled.div`
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    justify-content:space-between;
    padding:1rem 1rem 1rem 1rem;

    .nav-icons{
        display:flex;
        align-items: center;
        gap:1rem;

        svg{
            transition: transform 0.2s;
            color:var(--primary-color);
            &:hover{
                transform: scale(1.2);
            }
        }

    }

    .home-icon-container{
        display:flex;
        justify-content:center;
        margin-top:2rem;

        @media only screen and (max-width: 768px) {
            margin-right:1.3rem;
        }
        
        svg{
            font-size:2rem;
            color:var(--primary-color);
            transition-duration: $defaultDuration;
	        transition-property: transform;

            @media only screen and (max-width: 768px) {
            font-size:1.8rem;
        }

            &:hover{
                opacity: 1;
                background: radial-gradient(ellipse at center, var(--home-icon-color-glow) 0%,rgba(0,0,0,0) 80%);
                transition-duration: $defaultDuration;
                transition-property: transform opacity;
            }

            &:hover {
		        transform: translateY(-5px); 

            &:before {
                opacity: 1;
                transform: translateY(5px); 
                }
	        }
        }

    }

`;

const ContactMeStyled = styled.div`
    display:flex;
    align-items: center;

    button{
        background:none;
        border:none;
        cursor: pointer;
        transition: transform 0.5s;
        font-size:1.3rem;
        font-weight:600;
        color:var(--secondary-color);
        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }
    }

    button:hover{
        transform: scale(1.2);
    }
    
`;

export default Navigation;
