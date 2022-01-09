import { createGlobalStyle } from "styled-components";



const GlobalStyled = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200&display=swap');

/* Using guide from material UI, change colours as you please*/

/* To change floating action button go to - FloatingActionButton.js */

    .light-theme{

        /* Home page or General Colours */
        --primary-color: #888;
        --secondary-color:#808080;
        --background-dark-color: linear-gradient(270deg, #ffffff 0%, #d7e1ec 74%);
        --home-icon-color-glow: rgba(0,0,20,.35);

        /* Abouts page */
        --abouts-primary-box: linear-gradient(180deg, #ffffff 0%, #d7e1ec 74%); /*  background colour for below the nav bar */
        --abouts-border-color: #808080; /*  border colour of text container  */

        /* Education page */
        --education-primary-box: linear-gradient(180deg, #ffffff 0%, #d7e1ec 74%);
        --education-primary-color: #888;
        --education-secondary-color: #808080;
        --bullet-color: #808080;

        /* Work page */
        --work-primary-box: linear-gradient(180deg, #ffffff 0%, #d7e1ec 74%);
        --work-primary-color: #888;
        /* To change icon colour change within the WorkPage.js  */

        /* Work page card - no light or dark theming */
        --workcard-title-color: black;
        --workcard-subtitle-color: black;
        --workcard-description-color: black;

        /* Blog Page */
        --blog-primary-box: linear-gradient(180deg, #ffffff 0%, #d7e1ec 74%);
        --blog-primary-color: #888;

        /* Individual Blog Page */
        --individualblog-primary-box: linear-gradient(180deg, #ffffff 0%, #d7e1ec 74%);
        --individualblog-primary-color: #888;

        /* Big title - title of each page */
        --bigtitle-primary-color: #888;
        --bigtitle-secondary-color: #808080;
        
    }

    .dark-theme{
        --primary-color: #FFF;
        --secondary-color: #BB86FC;
        --background-dark-color: #1F1A24;
        --home-icon-color: rgba(255,255,255, 0.5);
        --home-icon-color-2: rgba(255,255,255, 0.3);

        /* Abouts page for dark theme */
        --abouts-primary-box: #332940;
        --abouts-border-color: #808080;

        /* Education page */
        --education-primary-box: #332940;
        --education-primary-color: #FFF;
        --education-secondary-color: #BB86FC;
        --bullet-color: #BB86FC;

        /* Work page */
        --work-primary-box: #332940;
        --work-primary-color: #FFF;

        /* Blog Page */
        --blog-primary-box: #332940;
        --blog-primary-color: #FFF;

        /* Individual Blog Page */
        --individualblog-primary-box: #332940;
        --individualblog-primary-color: #FFF;

        /* Big title - title of each page */
        --bigtitle-primary-color: #FFF;
        --bigtitle-secondary-color: #BB86FC;

    }

    *{
        padding:0;
        margin:0;
        font-family: 'Source Serif Pro', serif;
    }

    body{
        background: var(--background-dark-color);
    }

`;

export default GlobalStyled;