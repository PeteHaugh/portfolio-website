import { createGlobalStyle } from 'styled-components/macro';
import TransitionStyles from './TransitionsStyles';
import variables from './variables';

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

    ::-webkit-scrollbar {
        width: 12px;
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
        font-family: Helvetica, sans-serif;
    }

    :root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
    }

    main {
        margin: 0 auto;
        width: 100%;
    }
    

    ${TransitionStyles}

`;

export default GlobalStyle;