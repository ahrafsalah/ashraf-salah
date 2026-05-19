"use client";
import { HomeIcon, PhoneCallIcon } from "lucide-react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
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
        min-h-screen w-full
        py-16
        bg-cover bg-center
        relative
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
            Contact Me
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto
              text-white
            "
          >
            I’m a passionate Frontend Developer focused on building modern,
            responsive, and user-friendly web applications. Whether you have a
            project idea, freelance opportunity, or just want to connect, feel
            free to reach out. I’m always excited to collaborate and create
            exceptional digital experiences.
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
                  Address
                </h4>

                <p
                  className="
                    text-white
                  "
                >
                  Tanta - Gharbia - Egypt
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
                  Phone
                </h4>

                <p
                  className="
                    text-white
                  "
                >
                  +201029805532
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
                  Email
                </h4>

                <p
                  className="
                    text-white
                  "
                >
                  a.salah3451@gmail.com
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
                Send Message
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
                  placeholder="Full Name"
                  
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
                  placeholder="Email"
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
                  placeholder="Type your Message..."
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
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
