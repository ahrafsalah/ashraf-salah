"use client";
import { HomeIcon, PhoneCallIcon } from "lucide-react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const t = useTranslations("Contact");
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_uymygun",
        "template_6nz3tk9",
        form.current,
        "BWzRSqxPGilPqFQr8",
      );
      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg-img.png')",
      }}
      className="
        min-h-screen max-w-full md:max-w-[80%]
        py-16
        bg-cover bg-center
        relative
        m-auto
      "
    >
      {/* Overlay */}
      <div
        className="
          bg-black/80
          absolute inset-0
        "
      ></div>

      <div
        className="
          z-10
          max-w-7xl
          mx-auto px-5
          relative
        "
      >
        {/* Header */}
        <div
          className="
            mb-14
            text-center
          "
        >
          <h2
            className="
              mb-5
              text-white text-5xl font-bold
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              text-white
            "
          >
            {t("description")}
          </p>
        </div>

        {/* Content */}
        <div
          className="
            flex flex-col
            items-center justify-between gap-10
            lg:flex-row
          "
        >
          {/* Contact Info */}
          <div
            className="
              w-full
              space-y-8
              lg:w-1/2
            "
          >
            {/* Address */}
            <div
              className="
                flex
                items-start gap-5
              "
            >
              <div
                className="
                  flex
                  w-[70px] h-[70px]
                  bg-white
                  rounded-full
                  items-center justify-center
                "
              >
                <HomeIcon size={30} color="black" />
              </div>

              <div>
                <h4
                  className="
                    mb-1
                    text-(--main-color) text-2xl font-semibold
                  "
                >
                  {t("ContactInfo.address.title")}
                </h4>

                <p
                  className="
                    text-white
                  "
                >
                  {t("ContactInfo.address.value")}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="
                flex
                items-start gap-5
              "
            >
              <div
                className="
                  flex
                  w-[70px] h-[70px]
                  bg-white
                  rounded-full
                  items-center justify-center
                "
              >
                <PhoneCallIcon size={30} color="black" />
              </div>

              <div>
                <h4
                  className="
                    mb-1
                    text-(--main-color) text-2xl font-semibold
                  "
                >
                  {t("ContactInfo.phone.title")}
                </h4>

                <p
                  className="
                    text-white
                  "
                >
                  {t("ContactInfo.phone.value")}
                </p>
              </div>
            </div>

            {/* Email */}
            <div
              className="
                flex
                items-start gap-5
              "
            >
              <div
                className="
                  flex
                  w-[70px] h-[70px]
                  bg-white
                  rounded-full
                  items-center justify-center
                "
              >
                <MdEmail size={30} color="black" />
              </div>

              <div>
                <h4
                  className="
                    mb-1
                    text-(--main-color) text-2xl font-semibold
                  "
                >
                  {t("ContactInfo.email.title")}
                </h4>

                <p
                  className="
                    text-white
                  "
                >
                  {t("ContactInfo.email.value")}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="
              w-full
              p-10
              bg-(--color3)
              rounded-lg
              lg:w-[45%]
            "
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="
                space-y-6
              "
            >
              <h2
                className="
                  text-4xl font-bold text-white
                "
              >
                {t("form.title")}
              </h2>

              {/* Name */}
              <div
                className="
                  relative
                "
              >
                <input
                  type="text"
                  required
                  className="
                    w-full
                    py-2
                    bg-transparent
                    border-b-2 border-white
                    peer outline-none
                  "
                  placeholder={t("form.name")}
                />
              </div>

              {/* Email */}
              <div
                className="
                  relative
                "
              >
                <input
                  type="email"
                  required
                  className="
                    w-full
                    py-2
                    bg-transparent
                    border-b-2 border-white
                    peer outline-none
                  "
                  placeholder={t("form.email")}
                />
              </div>

              {/* Message */}
              <div
                className="
                  relative
                "
              >
                <textarea
                  required
                  rows={4}
                  className="
                    w-full
                    py-2
                    bg-transparent
                    border-b-2 border-white
                    resize-none
                    peer outline-none
                  "
                  placeholder={t("form.message")}
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  py-3
                  text-white text-lg
                  bg-(--main-color)
                  border border-(--main-color)
                  transition-all
                  duration-300 
                  cursor-pointer
                  rounded-xl
                "
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
