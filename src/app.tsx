// library
import { Routes, Route } from 'react-router-dom';

// pages
import { HomePage, CorrectionPage, BrushesPage } from '@pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/correction" element={<CorrectionPage />} />
      <Route path="/brushes" element={<BrushesPage />} />
    </Routes>
  );
};

export default App;
