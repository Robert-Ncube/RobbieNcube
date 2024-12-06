import React from "react";
import image from "@/assets/images/table.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoDocumentTextSharp } from "react-icons/io5";
import SkillsList from "@/components/SkillsList";
import TechStack from "@/components/TechStack";
import MoreAbout from "@/components/MoreAbout";

const About = () => {
  return (
    <section className="text-white mt-20 flex flex-col gap-6 px-8 py-5">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="">
          <Image
            src={image}
            alt="developer table setup"
            className="h-full w-full object-cover   object-center max-h-96 md:max-h-[34rem] rounded-lg"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            width={500}
            height={500}
          />
        </div>
        <div className="p-4 text-center md:text-start flex flex-col gap-5">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600 ">
            About Robbie
          </h2>
          <p className="text-sm">
            My name is Robert Ncube but I go by Robbie Ncube everywhere. I grew
            up in Southen Africa and Im a full-stack developer. I have worked on
            a wide range of projects, from collaborated library package
            applications to eCommerce booking platforms, with a focus on
            creating clean, well-crafted interfaces that not only look great but
            also provide a seamless user experience.
          </p>
          <p className="text-sm">
            When Im not fighting with the computer you will also find me in the
            studio recording some hip-hop jam, writing books, screenplays, and
            comics, or indulging myself in the world of animation. Im very
            passionate about music and writing bringing my imagination to life.
            Im always curious to learn more when it comes to new technologies
            and creative coding.
          </p>
          <Link
            href={
              "https://drive.google.com/file/d/1AHqwdAaQ2b8CxRv7aiahQoCxAFPSKQKC/view?usp=sharing"
            }
            className="mt-12"
          >
            <button
              title="download my resume"
              className="bg-gradient-to-br from-orange-600 via-purple-600 to-white px-1 py-1 rounded-lg w-full sm:w-fit"
            >
              <span className="bg-[#121212]  hover:bg-white hover:text-black rounded-lg px-4 py-2 flex items-center">
                Resume
                <IoDocumentTextSharp className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <SkillsList />
      <TechStack />
      <MoreAbout />
    </section>
  );
};

export default About;
