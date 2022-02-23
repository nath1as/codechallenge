import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  height: 100%;
  width: 100%;
  user-select: none;
 * {
  user-select: none;
  scrollbar-width: none;
    ::-webkit-scrollbar {
    display: none;
  }
  *,
  *::after,
  *::before {
    outline: none;
    padding: 0;
    margin: 0;
    user-drag: none;
    font-size: 14px;
  }
  input, textarea {
    user-select: auto;
    pointer-events: auto;
    user-drag: auto;
    cursor: pointer;
  }
  img {
    pointer-events: none;
    border: none;
    outline: none;
    background: #92bb83;
  }
  a {
    text-decoration: none;
    outline:none;
    font-size: var(--size1);
  }
  ul {
    padding: 0;
    list-style-type: none;
  }
  li {
    padding: 0;
    list-style-type: none;
  }
  body {
    overflow-y: hidden;
    height: 100vh;
    width: 100vw;
    font-family: Merriweather;
    overflow: hidden;
  }
`;

export default GlobalStyle;
