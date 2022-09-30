import { createGlobalStyle } from 'styled-components/macro';
import TransitionStyles from './TransitionsStyles';
import variables from './variables';
import LeagueSpartanBlack from '../fonts/LeagueSpartan-Black.ttf';

const GlobalStyle = createGlobalStyle`

    ${variables};

    html {
        box-sizing: border-box;
        scrollbar-width: thin;
        scroll-behavior: smooth;
        padding: 0;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }


    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--primary-color);
        color: var(--font-color);
        transition: all 0.5s ease;
        font-family: 'LeagueSpartanBlack', 'Helvetica', sans-serif;
    }

    :root {
        min-height: 100vh;
    }

    main {
        margin: 0 auto;
        width: 100%;
    }
    

    ${TransitionStyles}

`;

export default GlobalStyle;