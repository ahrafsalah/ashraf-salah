
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        overflow-hidden
        p-8
        text-white
        bg-black
        relative
      "
    >
      {/* Green Glow */}
      <div
        className="
          w-full h-[360px]
          bg-[radial-gradient(ellipse_160%_100%_at_60%_90%,rgba(57,255,20,0.9)_0%,rgba(57,255,20,0.4)_50%,transparent_80%)]
          absolute -bottom-48 left-1/2 -translate-x-1/2 blur-3xl
        "
      />

      <div
        className="
          z-10 grid grid-cols-1
          max-w-7xl
          mx-auto px-6 py-24
          relative gap-12
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* Logo */}
        <div>
          <Image
            src="/assets/logoImg.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="
              mb-4
              font-semibold
            "
          >
            Quick Links
          </h4>
          <ul
            className="
              space-y-3
              text-gray-400 text-sm
            "
          >
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="#">Home</Link>
            </li>
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="#skills">Skills</Link>
            </li>
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="#projects">Projects</Link>
            </li>
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="#services">Services</Link>
            </li>
           
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4
            className="
              mb-4
              font-semibold
            "
          >
            Company
          </h4>
          <ul
            className="
              space-y-3
              text-gray-400 text-sm
            "
          >
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
             <Link href="/">About Me</Link>
            </li>
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="/contact-us">Contact Me</Link>
            </li>
           
          </ul>
        </div>

        {/* Newsletter */}
     <div>
          <h4
            className="
              mb-4  
              font-semibold
            "          >
            Follow Me
          </h4>

          <div
            className="
              flex
              mt-6
              gap-4
            "
          >
            <FaInstagram
              className="
                text-gray-400
                cursor-pointer
                hover:text-green-400
              "
            />
            <FaLinkedinIn
              className="
                text-gray-400
                cursor-pointer
                hover:text-green-400
              "
            />
            <FaFacebookF
              className="
                text-gray-400
                cursor-pointer
                hover:text-green-400
              "
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
