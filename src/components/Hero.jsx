"use client";

import Image from "next/image";
import React from "react";
import HeroImg from "@/assets/images/hero-pic.png";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-100">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 place-self-center text-center sm:text-start">
            <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600 font-protest-revolution">
                Hello, Im{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Robbie Ncube",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  " A Web Developer",
                  1000,
                  "A Mobile Developer",
                  1000,
                  "An Artist",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <p className="text-base text-gray-400 w-full lg:max-w-prose">
              👋 Hi there, Im Robbie Ncube, a passionate full stack Software
              Developer dedicated to turning complex problems into simple,
              beautiful solutions. I blend creativity with my technical
              expertise and create digital experiences that not only perform
              seamlessly but also easily onboard users.
            </p>
            <p className="text-base text-gray-400 w-full lg:max-w-prose my-4">
              Contact me and let&apos;s create something extraordinary together!
            </p>
            <div className="py-5 flex flex-col sm:flex-row items-center gap-4 font-bold">
              <Link href={"/about"}>
                <button
                  title="learn more about me"
                  className="bg-gradient-to-br from-orange-600 via-purple-600 to-white  px-4 py-2 text-white rounded-full hover:opacity-45 hover:text-white w-full sm:w-fit"
                >
                  More About Me
                </button>
              </Link>
              <Link href={"/projects"}>
                <button
                  title="checkout my projects"
                  className="bg-gradient-to-br from-orange-600 via-purple-600 to-white px-1 py-1 rounded-lg w-full sm:w-fit"
                >
                  <span className="block bg-[#121212]  hover:bg-white hover:text-black rounded-lg px-4 py-2">
                    My Projects
                  </span>
                </button>
              </Link>
              <Link
                href={
                  "https://docs.google.com/document/d/1KaKdrv0-ozav3QJ8dPFvdTNxl_tememu6QHuFVB0CoY/edit?tab=t.0#heading=h.nhyqtz4w9uxg"
                }
              >
                <button
                  title="download my resume"
                  className="bg-gradient-to-br from-orange-600 via-purple-600 to-white px-1 py-1 rounded-lg w-full sm:w-fit"
                >
                  <span className="block bg-[#121212]  hover:bg-white hover:text-black rounded-lg px-4 py-2">
                    My Resume
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-full bg-slate-950 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative overflow-hidden">
              <Image
                src={HeroImg}
                alt="Hero image"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                quality={100}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
