import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { TopChartsPage } from './pages/TopChartsPage';

import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';

import { LightTheme, DarkTheme } from './style/theme';

import { GlobalStyle } from './style/globalStyle';
import styled, { ThemeProvider } from 'styled-components';

export const App = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Box>
          <Wrapper>
            <Sidebar themeToggler={themeToggler} />
            <Content>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/top-charts" element={<TopChartsPage />} />
              </Routes>
            </Content>
          </Wrapper>
          <Player />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: auto;
`;

const Content = styled.div`
  overflow: auto;
`;
