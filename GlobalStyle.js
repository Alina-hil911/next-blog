import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #F4F4F4;
    font-family: sans-serif;

  
  }
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s ease;
      &:hover {
      opacity: 0.8;
    }
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
