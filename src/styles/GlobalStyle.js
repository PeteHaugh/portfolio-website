import { createGlobalStyle } from 'styled-components/macro';
import variables from './variables';

const GlobalStyle = createGlobalStyle`

    ${variables};

    html {
        box-sizing: border-box;
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
    }

`;

export default GlobalStyle;