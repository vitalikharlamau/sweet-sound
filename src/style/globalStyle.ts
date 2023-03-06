import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<any>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background}
  }
`;
