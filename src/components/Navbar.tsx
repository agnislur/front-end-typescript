import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../reduxStore/hooks';
import { logout } from '../reduxStore/slices/userSlice';
import Login from './Login'; 
import { Link as ScrollLink } from 'react-scroll'; 

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 
  const [activeSection, setActiveSection] = useState<string>('home');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); 
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
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

  return (
    <>
      <nav className={`p-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-1000 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black font-bold text-xl">Bandung Indah</div>
          <div>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={`px-3 py-2 rounded ${activeSection === 'home' ? 'text-blue-500' : 'text-black'} hover:text-blue-500`}
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"text-blue-500
              smooth={true}
              duration={500}
              className={`px-3 py-2 rounded ${activeSection === 'about' ? 'text-blue-500' : 'text-black'} hover:text-blue-500`}
            >
              About
            </ScrollLink>

            <ScrollLink
              to="whyBandung"
              smooth={true}
              duration={500}
              className={`px-3 py-2 rounded ${activeSection === 'whyBandung' ? 'text-blue-500' : 'text-black'} hover:text-blue-500`}
            >
              Kenapa Bandung
            </ScrollLink>

            <ScrollLink
              to="testimoni"
              smooth={true}
              duration={500}
              className={`px-3 py-2 rounded ${activeSection === 'testimoni' ? 'text-blue-500' : 'text-black'} hover:text-blue-500`}
            >
              Testimoni
            </ScrollLink>


            {isLoggedIn && (
              <Link to="/users" className="text-black px-3 py-2 rounded hover:text-blue-500">Work</Link>
            )}
            <Link to="/errorpage" className="text-black px-3 py-2 rounded hover:text-blue-500">Profile</Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-black px-3 py-2 rounded hover:bg-red-500"
              >
                LogOut
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                className="text-black px-3 py-2 rounded hover:bg-white hover:text-black"
              >
                Login
              </button>
            )}
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
