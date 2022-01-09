import React from 'react';
import styled from "styled-components";

const EducationTimeline = ({year, title, subtitle, text}) => {
    return (
        <TimelineStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <p>{text}</p>
            </div>
        </TimelineStyled>
    )
}

const TimelineStyled = styled.div`
display:flex;
padding-bottom:4rem;


    .left-content{
        width:20%;
        padding-left:20px;
        position:relative;

        &::before{
            content:"";
            position:absolute;
            left:10%;
            top:5px;
            height:15px;
            width:15px;
            border:2px solid var(--bullet-color);
            border-radius:50%;
            background-color:var(--bullet-color);

            @media only screen and (max-width: 500px) {

            height:5px;
            width:5px;
            top:12px;
            }
        }
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
        padding-left:10rem;
        position:relative;

        @media only screen and (max-width: 500px) {
            padding-left:4rem;

        }
        &::before{
            content:"";
            position:absolute;
            left:0;
            top:15px;
            width:4rem;
            height:2px;
            background-color:var(--education-primary-color);

            @media only screen and (max-width: 500px) {
            width:2rem;

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
            font-size:1.3rem;
            padding-bottom:1rem;
            @media only screen and (max-width: 500px) {
            font-size:0.8rem;
        }
        }

        p{
            font-size:1.1rem;
            color:var(--primary-color);
            white-space:pre-wrap;
            
            @media only screen and (max-width: 500px) {

            font-size:0.8rem;
            }
        }
    }
`;
export default EducationTimeline;
