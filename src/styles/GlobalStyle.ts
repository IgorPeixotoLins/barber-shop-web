import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #000000; /* Força o fundo a ser totalmente preto */
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }
    button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }
`;


export default GlobalStyle;