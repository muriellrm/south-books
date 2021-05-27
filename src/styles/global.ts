import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.jpeg';
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;                
    }

    body {
        color: #fff;
        -webkit-font-smoothing: antialiased;       
        background: url(${background}) no-repeat;
    background-size: cover;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }

`;

