import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
        <NavigationStyled>
            <div className="nav-icons">
                <a target="_blank" href="https://www.instagram.com/yue_hixn/">
                    <InstagramIcon className="instagram-icon"/>
                </a>
                <a target="_blank" href="https://www.facebook.com/edmund.ho.39">
                    <FacebookIcon className="facebook-icon"/>
                </a>
                <a target="_blank" href="">
                    <LinkedInIcon className="linkedin-icon"/>
                </a>
                
            </div>  

            <div className="home-icon-container">
                <NavLink to="/home">
                    <HomeIcon className="home-icon"/>
                </NavLink>
            </div>

            <ContactMeStyled>
                <button onClick={() => window.location = 'mailto:edmundho711@hotmail.com'}>Contact Me</button>
            </ContactMeStyled>


        </NavigationStyled>

        </>
    )
}

const NavigationStyled = styled.div`
    display:flex;
    justify-content:space-around;
    padding:1rem 0rem 1rem 0rem;

    .nav-icons{
        display:flex;
        align-items: center;
        gap:1rem;

        svg{
            transition: transform 0.2s;
            color:var(--primary-color);
            &:hover{
                transform: scale(0.9);
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
        color:var(--primary-color);
        @media only screen and (max-width: 768px) {
            font-size:1rem;
        }
    }

    button:hover{
        transform: scale(0.9);
    }
    
`;

export default Navigation;
