import { css } from 'styled-components/macro';

const variables = css`
    :root {
        --primary-color: #eae7dc;
        --secondary-color: #D8C3A5;
        --font-color: #8E8D8A;
        --heading-color: #E85A4F;
    }

    [data-theme="dark"] {
        --primary-color: #0B132B;
        --secondary-color: #818cab;
        --font-color: #e1e1ff;
        --heading-color: #818cab;
    }
`;

export default variables;