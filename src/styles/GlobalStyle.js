import { createGlobalStyle } from "styled-components/macro";
import variables from "./variables";

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
        ::-webkit-scrollbar {
    background-color: gray;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #eae7dc;
    opacity: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #2f3136;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #E85A4F;
  }
    }

    :root {
        min-height: 100vh;
    }

    main {
        margin: 0 auto;
        width: 100%;
    }

`;

export default GlobalStyle;
