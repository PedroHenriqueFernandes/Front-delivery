import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
:focus{
    outline: transparent;
    box-shadow: 0 0 0 1px var(--blue-500);
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  body{
    background: var(--gray-600);
    color: var(--gray-300);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button{
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  `;