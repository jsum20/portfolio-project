import React from 'react';
import { Switch } from "@material-ui/core";
import styled from "styled-components";
import { useState, useEffect } from "react";


const ToggleSwitch = () => {

    const [theme, setTheme] = useState('light-theme');
    const [checked, setChecked] = useState();

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme])

    const themeToggler = () => {
        if(theme === 'dark-theme') {
            setTheme('light-theme')
            setChecked(false)
        } else {
            setTheme('dark-theme')
            setChecked(true)
        }
    }


    return (
        <LightDarkSwitchStyled>
            <Switch value="" size="medium" thumbSwitchedStyle={{ backgroundColor: 'grey' }} checked={checked} onClick={themeToggler}/>
        </LightDarkSwitchStyled>


    )
}

const LightDarkSwitchStyled = styled.div`
    background-color:var(--background-light-color-2);
    height:2.5rem;
    z-index:15;
    align-items:center;
    display:flex;
    justify-content:center;
    
`;
export default ToggleSwitch;