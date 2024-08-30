// src/components/NavbarLinks.tsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarLinksProps {
  activeSection: string;
  handleSectionClick: (section: string) => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ activeSection, handleSectionClick }) => {
  return (
    <>
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className={`px-3 py-2 rounded ${activeSection === 'home' ? 'text-blue-500' : 'hover:text-blue-500'}`}
        onClick={() => handleSectionClick('home')}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className={`px-3 py-2 rounded ${activeSection === 'about' ? 'text-blue-500' : 'hover:text-blue-500'}`}
        onClick={() => handleSectionClick('about')}
      >
        About
      </ScrollLink>
      <ScrollLink
        to="whyBandung"
        smooth={true}
        duration={500}
        className={`px-3 py-2 rounded ${activeSection === 'whyBandung' ? 'text-blue-500' : 'hover:text-blue-500'}`}
        onClick={() => handleSectionClick('whyBandung')}
      >
        Kenapa Bandung
      </ScrollLink>
      <ScrollLink
        to="testimoni"
        smooth={true}
        duration={500}
        className={`px-3 py-2 rounded ${activeSection === 'testimoni' ? 'text-blue-500' : 'hover:text-blue-500'}`}
        onClick={() => handleSectionClick('testimoni')}
      >
        Testimoni
      </ScrollLink>
    </>
  );
};

export default NavbarLinks;
