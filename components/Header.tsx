"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiLockClosed, HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const t = useTranslations("Header");
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header
      className="
        z-50
        bg-[#0a0a0a]
        sticky top-0
      "
    >
      <div
        className="
          container flex
          mx-auto p-2 px-4
          items-center justify-between
        "
      >
        <Image
          src="/images/logoImg.png"
          alt="logo"
          width={50}
          height={50}
          className="
            w-auto h-auto
          "
        />

        {/* Desktop Menu */}
        <nav
          className="
            hidden
            p-2 px-5
            bg-[conic-gradient(from_181.06deg_at_50%_50%,rgba(100,154,99,0.35)_0deg,rgba(0,0,0,0)_172.66deg,rgba(107,219,106,0.31)_281.25deg,rgba(100,154,99,0.35)_360deg)]
            rounded-[35px]
            md:flex
          "
        >
          <ul
            className="
              flex
              text-white
              items-center gap-4
            "
          >
            <li>
              <Link href="/"> {t("home")} </Link>
            </li>
            <li>
              <Link href="/#skills"> {t("skills")} </Link>
            </li>
            <li>
              <Link href="/#services"> {t("services")} </Link>
            </li>
            <li>
              <Link href="/#projects"> {t("projects")} </Link>
            </li>
            <li>
              <Link href="/contact-us"> {t("contact")} </Link>
            </li>
          </ul>
        </nav>

        {/* Resume Button */}
        <div
          className="
            hidden
            ml-4
            md:block
          "
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 px-5
              text-white
              bg-[conic-gradient(from_181.06deg_at_50%_50%,rgba(100,154,99,0.35)_0deg,rgba(0,0,0,0)_172.66deg,rgba(107,219,106,0.31)_281.25deg,rgba(100,154,99,0.35)_360deg)]
              rounded-[35px]
            "
          >
            {t("resume")}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="
            md:hidden
          "
        >
          <HiOutlineMenuAlt3
            size={28}
            onClick={toggleMenu}
            color="white"
            className="
              cursor-pointer
            "
          />

          {/* Mobile Menu */}
          {showMenu && (
            <div
              className="
                z-50
                w-full h-screen
                p-4
                text-white
                bg-black bg-opacity-90
                transition-all
                fixed top-0 left-0 duration-500
              "
            >
              <div
                className="
                  flex
                  items-center justify-between
                "
              >
                {" "}
                <Image
                  src="/images/logoImg.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className="
                    w-auto h-auto
                  "
                />
                <MdOutlineClose
                  size={30}
                  color="white"
                  onClick={toggleMenu}
                  className="
                    cursor-pointer
                    absolute top-4 right-4
                  "
                />
              </div>
              <div
                className="
                  flex flex-col
                  mt-10
                  items-center gap-6
                "
              >
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="
                    text-xl
                  "
                >
                  {t("home")}
                </Link>
                <Link
                  href="/#skills"
                  onClick={toggleMenu}
                  className="
                    text-xl
                  "
                >
                  {t("skills")}
                </Link>
                <Link
                  href="/#services"
                  onClick={toggleMenu}
                  className="
                    text-xl
                  "
                >
                  {t("services")}
                </Link>
                <Link
                  href="/#projects"
                  onClick={toggleMenu}
                  className="
                    text-xl
                  "
                >
                  {t("projects")}
                </Link>
                <Link
                  href="/contact-us"
                  onClick={toggleMenu}
                  className="
                    text-xl
                  "
                >
                  {t("contact")}
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="
                    mt-4 px-6 py-2
                    bg-(--main-color)
                    rounded-[35px]
                  "
                >
                  {t("resume")}
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
