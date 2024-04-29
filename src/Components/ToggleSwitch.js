import React, { useState, useEffect } from 'react';
import { Switch } from "@material-ui/core";
import styled from "styled-components";

const StyledSwitch = styled(Switch)`
 &.MuiSwitch-switchBase {
    color: ${props => (props.checked ? 'black' : 'grey')};
 }
 &.MuiSwitch-checked {
    color: black;
 }
`;

const ToggleSwitch = () => {
    const [theme, setTheme] = useState('light-theme');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const themeToggler = () => {
        if(theme === 'dark-theme') {
            setTheme('light-theme');
            setChecked(false);
        } else {
            setTheme('dark-theme');
            setChecked(true);
        }
    };

    return (
        <LightDarkSwitchStyled>
            <StyledSwitch
                value=""
                size="medium"
                checked={checked}
                onClick={themeToggler}
            />
        </LightDarkSwitchStyled>
    );
};

const LightDarkSwitchStyled = styled.div`
    height: 2.5rem;
    z-index: 15;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export default ToggleSwitch;