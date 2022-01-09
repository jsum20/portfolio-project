import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from "styled-components";


const FloatingActionButton = () => {
    const arrow = <ArrowBackIcon />

    return (
        <FabsStyled>
            <div className="fab">
                {arrow}
            </div>
        </FabsStyled>
    )
}

const FabsStyled = styled.div`

    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 2px solid #D3D3D3;;
    box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
    cursor: pointer;   
    background: #D3D3D3;
    color:var(--primary-color);

    .fab{
        text-align:center;
    }

`;
export default FloatingActionButton
