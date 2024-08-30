import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './reduxStore/hooks';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import LoginPage from './pages/LoginPage';
import UserList from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/users" element={isLoggedIn ? <UserList /> : <Navigate to="/login" />} />
            <Route path="/errorpage" element={<ErrorPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/users" : "/login"} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
