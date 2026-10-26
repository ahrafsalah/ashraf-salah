import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
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
            src="/images/logoImg.png"
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-auto"
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
            {t("QuickLinks.Title")}
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
              <Link href="#">{t("QuickLinks.Home")}</Link>
            </li>
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="#skills">{t("QuickLinks.Skills")}</Link>
            </li>
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="#projects">{t("QuickLinks.Projects")}</Link>
            </li>
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="#services">{t("QuickLinks.Services")}</Link>
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
            {t("Company.Title")}
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
              <Link href="/">{t("Company.About")}</Link>
            </li>
            <li
              className="
                cursor-pointer
                hover:text-green-400
              "
            >
              <Link href="/contact-us">{t("Company.ContactMe")}</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            className="
              mb-4  
              font-semibold
            "
          >
            {t("Company.Title")}
          </h4>

          <div
            className="
              flex
              mt-6
              gap-4
            "
          >
            <a
              href="https://www.instagram.com/ashraf_salah3?igsh=Y3hpeTF6bGo2anlx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="
                text-gray-400
                cursor-pointer
                hover:text-green-400
              "
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ashraf-s-9b339a291?utm_source=share_via&utm_content=profile&utm_medium=member_iosc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="
                text-gray-400
                cursor-pointer
                hover:text-green-400
              "
              />
            </a>
            <a
              href="https://www.facebook.com/share/1D4SND5X8g/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="
                text-gray-400
                cursor-pointer
                hover:text-green-400
              "
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
