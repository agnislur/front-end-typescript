// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import Login from '../components/Login'; // Periksa jalur impor sesuai dengan struktur folder Anda

const LoginPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div>
      {showLogin && <Login onClose={handleClose} />}
      {/* Konten lainnya */}
    </div>
  );
};

export default LoginPage;
