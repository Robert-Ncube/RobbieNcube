import React from "react";
import Bounded from "./Bounded";
import Heading from "./Heading";
import { MdCircle } from "react-icons/md";
import react from "@/assets/icons/react.png";
import javascript from "@/assets/icons/javascript.png";
import css from "@/assets/icons/css.png";
import html from "@/assets/icons/html.png";
import redux from "@/assets/icons/redux.png";
import tailwind from "@/assets/icons/tailwind.png";
import nextjs from "@/assets/icons/nextjs.png";
import nodejs from "@/assets/icons/nodejs.png";
import typescript from "@/assets/icons/typescript.png";
import express from "@/assets/icons/express.png";
import sass from "@/assets/icons/sass.png";
import mongodb from "@/assets/icons/mongodb.png";
import git from "@/assets/icons/git.png";
import github from "@/assets/icons/github.png";
import bootstrap from "@/assets/icons/bootstrap.png";
import Image from "next/image";

const techStackData = [
  { name: "React", image: react },
  { name: "Javascript", image: javascript },
  { name: "CSS", image: css },
  { name: "HTML", image: html },
  { name: "Redux", image: redux },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Next JS", image: nextjs },
  { name: "Node js", image: nodejs },
  { name: "TypeScript", image: typescript },
  { name: "Express JS", image: express },
  { name: "Sass", image: sass },
  { name: "Mongo DB", image: mongodb },
  { name: "Git", image: git },
  { name: "Git Hub", image: github },
  { name: "Bootstrap", image: bootstrap },
  // Add more as needed
];

const TechStack = () => {
  return (
    <section className="flex flex-col py-6 mb-[8rem]  border-b border-gray-600 pb-6 gap-5 items-center justify-center">
      <Bounded as="div" className="text-center">
        <Heading
          size="md"
          className="text-transparent  border-b border-gray-600 bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white py-4"
          as="h2"
        >
          My Tech Stack
        </Heading>
      </Bounded>
      <div className="flex flex-wrap gap-4 items-center justify-center md:grid md:grid-cols-7">
        {techStackData.map((tech, index) => (
          <div key={index} className="flex flex-col items-center text-gray-600">
            <Image
              className="w-16 h-16 object-cover object-center rounded-full"
              src={tech.image}
              alt={tech.name}
              objectFit="cover"
              objectPosition="center"
              quality={100}
              width={100}
              height={100}
            />
            <p className="text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
