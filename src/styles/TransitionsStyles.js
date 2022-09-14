import { css } from 'styled-components';

const TransitionStyles = css`
    .fadein-enter {
        opacity: 0;
    }
    .fadein-enter-active {
        opacity: 1;
        transition: opacity 200ms;
    }
    .fadein-exit {
        opacity: 1;
    }
    .fadein-exit-active {
        opacity: 0;
        transition: opacity 200ms;
    }
`;

export default TransitionStyles;