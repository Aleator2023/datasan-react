import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Installation from './pages/Installation';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/installation" element={<MainLayout><Installation /></MainLayout>} />
    </Routes>
  );
}

export default App;