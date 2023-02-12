import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Player } from './components/Player';
import { HomePage } from './pages/HomePage';
import { TopChartsPage } from './pages/TopChartsPage';

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-charts" element={<TopChartsPage />} />
      </Routes>

      <Player />
    </>
  );
};
