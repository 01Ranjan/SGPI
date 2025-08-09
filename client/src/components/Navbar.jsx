import React, { useState } from "react";
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white px-6 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">GovSecure</h1>

        {/* Desktop Menu */}
        <div className="flex justify-between items-center gap-10">
            <ul className="hidden md:flex space-x-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/article" className="hover:underline">Article</a></li>
            <li><a href="/contact" className="hover:underline">Contact us</a></li>
            <li><a href="/Login" className="hover:underline">Login</a></li>
            </ul>
        </div>

        {/* Mobile Menu Toggler */}
        <button 
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-blue-900 px-4 py-3 space-y-2">
          <li><a href="/" className="block hover:underline">Home</a></li>
          <li><a href="/about" className="block hover:underline">About</a></li>
          <li><a href="/services" className="block hover:underline">Services</a></li>
          <li><a href="/contact" className="block hover:underline">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
