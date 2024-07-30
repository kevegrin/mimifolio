import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link className="text-white hover:text-gray-300" to="/about">About</Link>
          <Link className="text-white hover:text-gray-300" to="/projects">Projects</Link>
          <Link className="text-white hover:text-gray-300" to="/blog">Blog</Link>
          <Link className="text-white hover:text-gray-300" to="/contact">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link className="block text-white py-2 px-4 hover:text-gray-300" to="/about" onClick={toggleMenu}>About</Link>
          <Link className="block text-white py-2 px-4 hover:text-gray-300" to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link className="block text-white py-2 px-4 hover:text-gray-300" to="/blog" onClick={toggleMenu}>Blog</Link>
          <Link className="block text-white py-2 px-4 hover:text-gray-300" to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
