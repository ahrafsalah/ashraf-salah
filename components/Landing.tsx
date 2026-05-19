import Image from "next/image";

const Landing = () => {
  return (
    <div
      className="
        container
        mx-auto px-4
        text-white
      "
    >
      <div
        className="
          flex
          mt-10
          relative
          md:mt-20 md:items-start
        "
      >
        <div
          style={{ backgroundImage: "url('/assets/Gradient.png')" }}
          className="
            w-[460px] h-[260px]
            bg-contain bg-no-repeat bg-center
            relative
            md:w-[260px]
          "
        >
          <Image
            src="/assets/image.png"
            alt="Ashraf"
            width={120}
            height={120}
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            "
          />
        </div>

        {/* Arrow */}
        <Image
          src="/assets/arrow.png"
          alt="arrow"
          width={130}
          height={130}
          className="
            absolute -top-10 left-1/4
            md:left-34
          "
        />

        {/* Text */}
        <div
          className="
            flex flex-col
            -mt-2
          "
        >
          <h1
            className="
              min-[450px]:text-lg min-[540px]:relative
              text-xs font-preahvihear
              absolute -top-3 right-3
              sm:text-lg
            "
          >
            Hello, I&apos;m Ashraf Salah
          </h1>
          <div
            className="
              flex flex-col
              mt-10
              gap-1
              md:mt-0
            "
          >
            <p
              className="
                mt-10
                text-xs font-light
                sm:text-[10px]
                md:text-sm
              "
            >
              A Designer who
            </p>
            <p
              className="
                text-xl font-light
                relative
                sm:text-2xl
                md:text-5xl
              "
            >
              Judges a book{" "}
              <span
                className="
                  block
                "
              >
                by its{" "}
                <span
                  className="
                    text-(--main-color)
                  "
                >
                  cover...
                </span>
              </span>
            </p>

            <p
              className="
                text-xs
                sm:text-sm
                md:text-base
              "
            >
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
      </div>
      <div
        className="
          p-6 mt-6
        "
      >
        <h2
          className="
            mb-7
            text-4xl
          "
        >
          I&apos;m a Frontend Developer
        </h2>
        <p
          className="
            font-thin text-[15px] leading-6
          "
        >
          I enjoys building clean, responsive, and user-friendly web interfaces.
          I work mainly with React.js, Next.js, and Tailwind CSS, and I always
          focus on writing clean code and creating smooth user experiences. I
          have solid experience working with APIs, state management (Redux /
          Context), and integrating projects with services like Firebase and
          Supabase. I’m constantly learning, improving my skills, and building
          real projects that solve problems and deliver value.{" "}
        </p>
      </div>
    </div>
  );
};

export default Landing;
