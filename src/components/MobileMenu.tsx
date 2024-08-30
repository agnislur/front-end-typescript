// src/components/MobileMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLinks from './NavbarLinks'; // Import NavbarLinks

interface MobileMenuProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
  handleLoginClick: () => void;
  menuOpen: boolean;
  activeSection: string; // Tambahkan activeSection
  handleSectionClick: (section: string) => void; // Tambahkan handleSectionClick
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isLoggedIn,
  handleLogout,
  handleLoginClick,
  menuOpen,
  activeSection, 
  handleSectionClick, // Tambahkan handleSectionClick
}) => {
  return (
    <div className={`fixed top-0 right-0 w-1/4 h-full p-4 bg-white dark:bg-gray-800 z-40 lg:relative lg:flex lg:items-center lg:space-x-4 lg:bg-transparent lg:dark:bg-transparent lg:p-0 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}>
      <div className={`lg:hidden flex flex-col items-center justify-center space-y-6 p-4 fixed inset-0 bg-white dark:bg-gray-800 z-50 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {isLoggedIn ? (
          <>
            <Link to="/users" className="text-lg font-semibold px-3 py-2 rounded hover:text-blue-500">Work</Link>
            <Link to="/errorpage" className="text-lg font-semibold px-3 py-2 rounded hover:text-blue-500">Profile</Link>
            <button
              onClick={handleLogout}
              className="text-lg font-semibold px-3 py-2 rounded hover:bg-red-500"
            >
              LogOut
            </button>
          </>
        ) : (
          <button
            onClick={handleLoginClick}
            className="text-lg font-semibold px-3 py-2 rounded hover:bg-white hover:text-black"
          >
            Login
          </button>
        )}

        {/* Tambahkan NavbarLinks */}
        <NavbarLinks activeSection={activeSection} handleSectionClick={handleSectionClick} />
      </div>
    </div>
  );
};

export default MobileMenu;
