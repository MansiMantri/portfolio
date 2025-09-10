// import React from 'react'
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-1" src={logo} alt="logo" style={{ width: "80px", height: "auto" }} />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/mansi-mantri-43b126216/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin />
          </a>
                      <a 
              href="mailto:mmantri@wpi.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
                            >
                  <HiOutlineMail />
                </a>
                
                <a
          href="https://github.com/MansiMantri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
