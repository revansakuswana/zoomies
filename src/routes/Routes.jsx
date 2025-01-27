import { Routes, Route } from 'react-router-dom';
import Home from '@/App.jsx';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
