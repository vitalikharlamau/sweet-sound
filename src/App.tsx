import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { TopChartsPage } from './pages/TopChartsPage';

import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';

import { LightTheme, DarkTheme } from './style/theme';

import { GlobalStyle } from './style/globalStyle';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyle />

        <Sidebar themeToggler={themeToggler} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-charts" element={<TopChartsPage />} />
        </Routes>

        <Player />
      </ThemeProvider>
    </BrowserRouter>
  );
};
