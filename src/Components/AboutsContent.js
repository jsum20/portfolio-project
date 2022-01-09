import React from 'react';
import styled from "styled-components";

const AboutsContent = ({ data }) => {
    return (
        <AboutsStyled>
            {data.map((element, index) => {
                return(
                    <div className="abouts-text">
                        <h2>{element.header}</h2>
                        <div className="sub-text">{element.text1}</div>
                        <p>{element.text2}</p>
                    </div>
                )
            })}
        </AboutsStyled>
    )
}

const AboutsStyled = styled.div`
    color:white;
    border: 2px solid var(--secondary-color);
    padding: 2rem;
    width: 50vw;
    z-index: 3;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);
    
    position: absolute;
    left: 10%;
    top: 12rem;

    @media only screen and (max-width: 500px) {
        left: 15%;
        top: 16%;
        }


    .abouts-text{
        display:flex;
        flex-direction:column;
        gap:1rem;
        color:var(--primary-color);

        .sub-text{
            white-space: pre-wrap;
        }

        p{
            font-size:1.2rem;
            color:var(--primary-color);
            white-space: pre-wrap;
        }
    }
}

`;

export default AboutsContent;
