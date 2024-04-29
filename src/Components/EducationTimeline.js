import React from 'react';
import styled from "styled-components";

const EducationTimeline = ({title, image, subtitle, text, link}) => {
    return (
        <a href={link} target="_blank">
        <TimelineStyled>
            <div className="left-content">
                <p>{title}</p>
                <img src={image} alt={title} style={{ width: '200px', height: 'auto' }} />
            </div>
            <div className="right-content">
                <h5>{subtitle}</h5>
                <p>{text}</p>
            </div>
        </TimelineStyled>
        </a>
    )
}

const TimelineStyled = styled.div`
display:flex;
justify-content: center;
padding: 10px;
margin-bottom:2rem;
border: 1px solid #ccc;
transition: box-shadow 0.3s ease;
border-radius: 0.75rem;
background-color: var(--project-tile-box); /* Replace with the exact color code for bg-slate-800 */

&:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    background-color: var(--project-tile-box-hover); /* Replace with the exact color code for bg-slate-800 */
 }

    .left-content{
        width:20%;
        position:relative;
        flex: 1;
        margin-right: 10px;

        p{
            display:flex;
            justify-content:center;
            font-size:1.5rem;
            color:var(--education-primary-color);

            @media only screen and (max-width: 500px) {
            font-size:0.8rem;
            margin-top:0.5rem;
            }
        }
    }

    .right-content{
        padding-left: 7rem;
        position:relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex:2

        @media only screen and (max-width: 500px) {
            padding-left:4rem;

        }

        }
        h5, h4{
            color:var(--education-primary-color);
        }

        h4{
            font-size:2rem;
            padding-bottom:0.4rem;

            @media only screen and (max-width: 500px) {
            font-size:1rem;
        }
        }

        h5 {
            font-size:1.4rem;
            padding-bottom:1rem;
            @media only screen and (max-width: 500px) {
            font-size:0.8rem;
        }
        }

        p{
            font-size:1rem;
            color:var(--primary-color);
            font-weight: 600;
            white-space:pre-wrap;
            
            @media only screen and (max-width: 500px) {

            font-size:0.8rem;
            }
        }
    }
`;
export default EducationTimeline;
