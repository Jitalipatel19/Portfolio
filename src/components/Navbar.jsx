import React from 'react';
import logo from "../assets/letter-j.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* LOGO */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-8 w-10" src={logo} alt="logo" />
      </div>
      {/* ICONS */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/jitali-patel-431017263/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Jitalipatel19" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:jitalipatel21@gmail.com" target="_blank" rel="noopener noreferrer">
         <BiLogoGmail/>
        </a>
        <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
          <FaPhoneSquareAlt />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
