"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiLockClosed, HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className=" sticky top-0 z-50 bg-[#0a0a0a]   ">
      <div className="container mx-auto flex  items-center justify-between p-2  px-4">
        <Image src="/images/logoImg.png" alt="logo" width={50} height = {50}  className="w-auto h-auto"/>

        {/* Desktop Menu */}
        <nav className="hidden  md:flex rounded-[35px] p-2 px-5 bg-[conic-gradient(from_181.06deg_at_50%_50%,rgba(100,154,99,0.35)_0deg,rgba(0,0,0,0)_172.66deg,rgba(107,219,106,0.31)_281.25deg,rgba(100,154,99,0.35)_360deg)]">
          <ul className="flex items-center gap-4 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#skills">Skills</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Me</Link>
            </li>
          </ul>
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block ml-4">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-[35px] p-2 px-5 bg-[conic-gradient(from_181.06deg_at_50%_50%,rgba(100,154,99,0.35)_0deg,rgba(0,0,0,0)_172.66deg,rgba(107,219,106,0.31)_281.25deg,rgba(100,154,99,0.35)_360deg)]"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <HiOutlineMenuAlt3
            size={28}
            onClick={toggleMenu}
            color="white"
            className="cursor-pointer"
          />

          {/* Mobile Menu */}
          {showMenu && (
            <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90  z-50 text-white transition-all duration-500 p-4">
              <div className="flex items-center justify-between">
                {" "}
                <Image
                  src="/images/logoImg.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                />
                <MdOutlineClose
                  size={30}
                  color="white"
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
              <div className="flex flex-col items-center  gap-6 mt-10">
                <Link href="/" onClick={toggleMenu} className="text-xl">
                  Home
                </Link>
                <Link href="/#skills" onClick={toggleMenu} className="text-xl">
                  Skills
                </Link>
                <Link href="/#services" onClick={toggleMenu} className="text-xl">
                  Services
                </Link>
                <Link href="/#projects" onClick={toggleMenu} className="text-xl">
                  Projects
                </Link>
                <Link
                  href="/contact-us"
                  onClick={toggleMenu}
                  className="text-xl"
                >
                  Contact Me
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="mt-4 px-6 py-2 rounded-[35px] bg-(--main-color)"
                >
                  Resume
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
