// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../reduxStore/hooks';
import { logout } from '../reduxStore/slices/userSlice';
import MobileMenu from './MobileMenu'; // Import MobileMenu
import NavbarLinks from './NavbarLinks';
import { FaBars, FaTimes } from 'react-icons/fa';
import MaterialUISwitch from './ui';
import Login from './Login';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/HomePage');
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleMenu = () => {
    setMenuOpen(prevOpen => !prevOpen);
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false); // Close menu after selection
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'whyBandung', 'testimoni'];
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top < window.innerHeight / 2) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <nav className={`p-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-1000 ${scrolled ? 'bg-white shadow-lg dark:bg-gray-900' : 'bg-transparent dark:bg-gray-800'} ${darkMode ? 'text-white' : 'text-black'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Bandung Indah</div>
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden p-2" 
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <MobileMenu
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
              handleLoginClick={handleLoginClick}
              menuOpen={menuOpen}
              activeSection={activeSection}
              handleSectionClick={handleSectionClick}
            />
            <div className="hidden lg:flex items-center space-x-4">
              <NavbarLinks
                activeSection={activeSection}
                handleSectionClick={handleSectionClick}
              />
            </div>
            <MaterialUISwitch
              checked={darkMode}
              onChange={toggleDarkMode}
              className="ml-auto"
            />
          </div>
        </div>
      </nav>

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <Login onClose={closeLoginModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
