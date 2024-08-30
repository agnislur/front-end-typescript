import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './reduxStore/hooks';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
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
            <Route path="/users" element={isLoggedIn ? <UserList /> : <Navigate to="/" />} />
            <Route path="/errorpage" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/users" : "/"} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
