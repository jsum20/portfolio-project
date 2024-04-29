import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import "react-vertical-timeline-component/style.min.css";
import BigTitle from '../Components/BigTitle';
import styled from "styled-components";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ParticleBackground from '../Particle/ParticleBackground';

const useStyles = makeStyles((theme) => ({
    accordion: {
       maxWidth: '36rem',
       margin: 'auto', // This centers the accordion if needed
       marginBottom: theme.spacing(2),
       display: 'flex', // Use flexbox to control layout
       flexDirection: 'column', // Stack children vertically
       paddingTop: theme.spacing(1),
       paddingBottom: theme.spacing(1),
       backgroundColor: 'var(--project-tile-box)',
       color: 'var(--primary-color)'
    },
    accordionSummary: {
        display: 'flex', // Use flexbox to control layout
        alignItems: 'center', // Center children vertically
        justifyContent: 'center', // Center children horizontally
        color: 'var(--primary-color)',
    },
    accordionDetails: {
        display: 'flex',
        overflow: 'auto', // Add this line
        minHeight: '200px', // Set a minimum height for the AccordionDetails
        flexGrow: 1,
        color: 'var(--primary-color)'
    },
    expandIcon: {
        color: 'var(--primary-color)',
     },
   }));
   
const WorkPage = () => {

    const classes = useStyles(); 

    const work = <WorkIcon />

    const arrow = <ArrowForwardIosOutlinedIcon sx={{ fontSize: '0.7rem' }}/>

    const other = <AccountBalanceIcon />

    return (
        <Box>
            <TitleWrapper>
                <BigTitle text="Work Experience" icon={work} />
                <ParticleBackground />
            </TitleWrapper>

            <AccordionContainer>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Software Engineer @ Ancoris</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <div>
                        <Typography>
                        March 2023 - Current<br /><br />At Ancoris, I have had the opportunity to hone my mobile development skills, specifically in Android.
                        I am currently working on a global Android application for Rentokil Initial. The skills used primarily in this role include:<br /><br />
                        
                        </Typography>
                            <div>
                                <ul>
                                    <li>
                                    {arrow} Android
                                    </li>
                                    <li>
                                    {arrow} Java
                                    </li>
                                    <li>
                                    {arrow} GCP
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Software Engineering Consultant @ Bright Network</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                        <div>
                            <Typography>
                            Feb 2022 - March 2023<br /><br />During my time at Bright Network working as a software engineering consultant for Lloyds Banking Group, I had the chance
                            work on web development, primarily on an internal colleague tool for helping customers with financial difficulty. I had the opportunity to mentor graduates and partake in several hackathons.
                            The skills used primarily in this role include:<br /><br />
                            </Typography>

                            <div>
                                <ul>
                                    <li>
                                    {arrow} Javascript/React
                                    </li>
                                    <li>
                                    {arrow} Java/Springboot
                                    </li>
                                    <li>
                                    {arrow} PostGreSQL/Databases
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </AccordionContainer>
        </Box>
    )
}

const TitleWrapper = styled.div`
    display:flex;
`;

const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;
   

const Box = styled.div`
// background: var(--work-primary-box);
max-width: 36rem;
margin-left: auto;
margin-right: auto;

    .date{
        color:var(--work-primary-color);
    }

    .vertical-timeline-element-content {
        box-shadow: var(--work-box-shadow);
    }

    #description{
        margin:1.5em 0 2em 0;
    }

    .vertical-timeline-element-title {
        color:var(--workcard-title-color);
    }

    .vertical-timeline-element-subtitle {
        color: var(--workcard-subtitle-color);
    }

    .description{
        color: var(--workcard-description-color);
        white-space: pre-wrap;
    }


`;

export default WorkPage;
