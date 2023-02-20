import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.background}
  }
`;
