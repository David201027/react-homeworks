import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }

  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(135deg, #edf2ff, #f8fafc);
    color: #1e293b;
    font-family: 'Segoe UI', Arial, sans-serif;
  }

  button, input { font: inherit; }
  button { cursor: pointer; }
`;

export default GlobalStyles;
