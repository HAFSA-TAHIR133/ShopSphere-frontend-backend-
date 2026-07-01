// appRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Signup from '../pages/Signup';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <main className="main-content-wrapper">
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default AppRoutes;