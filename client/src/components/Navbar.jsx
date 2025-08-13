import React, { useState } from "react";
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS
import {Link} from "react-router-dom"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handelclick=()=>{
    setIsOpen(false)
  }

  return (
    <nav className=" text-white px-6 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">GovSecure</h1>

        {/* Desktop Menu */}
        <div className="flex justify-between items-center gap-10">
            <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/article" className="hover:underline">Article</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact us</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/addpost" className="hover:underline">add post</Link></li>



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
        <ul className="md:hidden flex flex-col bg-blue-900 px-4 py-3 space-y-2 rounded-2xl ">
          <li><Link to="/" className="block hover:underline" onClick={handelclick}>Home</Link></li>
          <li><Link to="/about" className="block hover:underline" onClick={handelclick}>About</Link></li>
          <li><Link to="/article" className="block hover:underline" onClick={handelclick}>Article</Link></li>
          <li><Link to="/contact" className="block hover:underline" onClick={handelclick}>Contact</Link></li>
          <li><Link to="/login" className="block hover:underline" onClick={handelclick}>login</Link></li>
        </ul>
      )}
    </nav>
  );
}
