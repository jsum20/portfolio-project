import React from 'react';
import styled from 'styled-components';


const Text = styled.div`
    color:var(--bigtitle-primary-color);
    font-size: calc(3rem + 3vw);
    z-index:0;
    display:flex;
    align-items:center;
    padding-bottom:2rem;
    padding:2rem;

    @media only screen and (max-width: 500px) {
        font-size: calc(2rem + 3vw);
        }

    svg{
        font-size:4rem;
        padding-right:1rem;
        padding-left:1rem;
        display:flex;
        align-items:center;
        color:var(--bigtitle-secondary-color);
    }
`


const BigTitle = ({text, icon}) => {
    return (
        <>
        <Text>
            {icon}
            {text}
        </Text>
        </>
    )
}

export default BigTitle;