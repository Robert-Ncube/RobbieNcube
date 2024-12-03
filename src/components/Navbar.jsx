"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Navlink from "./Navlink";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const NavLinks = [
    { title: "about", path: "/about" },
    { title: "projects", path: "/projects" },
    { title: "contact", path: "/contact" },
    { title: "blog", path: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-90 bg-[#121212] border-b border-slate-500 p-4">
      <div className="flex justify-between items-center mx-auto text-white w-full">
        <Link
          href="/"
          title="home"
          className="text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white"
        >
          Robbie
        </Link>
        <div className="hidden md:flex space-x-8 px-5">
          {NavLinks.map((link, index) => (
            <Navlink
              key={index}
              path={link.path}
              title={link.title}
              className="hover:text-gray-300"
              onClick={() => setShowMenu(!showMenu)}
            />
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center justify-center px-4 py-2 text-white rounded-full hover:opacity-75"
          >
            {showMenu ? (
              <IoMdClose size={24} title="close menu" />
            ) : (
              <LuMenu size={24} title="open menu" />
            )}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="flex flex-col items-center mt-4 md:hidden">
          {NavLinks.map((link, index) => (
            <Navlink
              key={index}
              path={link.path}
              title={link.title}
              className="hover:text-gray-300"
              onClick={() => setShowMenu(!showMenu)}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
