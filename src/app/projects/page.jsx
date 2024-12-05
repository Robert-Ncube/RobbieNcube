"use client";

import React from "react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Image from "next/image";

import Dripit from "@/assets/images/dripit.png";
import Robbie from "@/assets/images/robbie.png";
import DHVilla from "@/assets/images/DHVilla.png";
import Chatterbox from "@/assets/images/chatterbox.png";
import Link from "next/link";
import Project from "@/components/project";

export const projects = [
  {
    id: 1,
    title: "Dripit",
    description: "E-commerce Store",
    image: Dripit,
    links: [
      {
        name: "Github",
        url: "https://github.com/Robert-Ncube/Dripit",
      },
      {
        name: "Live Demo",
        url: "https://dripit.onrender.com",
      },
    ],
    date: "2022-01-01",
  },
  {
    id: 2,
    title: "Chatterbox",
    description: "Social Media App",
    image: Chatterbox,
    links: [
      {
        name: "Github",
        url: "https://github.com/Robert-Ncube/chatterbox",
      },
      {
        name: "Live Demo",
        url: "https://chatterbox-8ksu.onrender.com",
      },
    ],
    date: "2022-01-01",
  },
  {
    id: 3,
    title: "Diamond Hills Villa",
    description: "Villa Landing Site",
    image: DHVilla,
    links: [
      {
        name: "Github",
        url: "https://github.com/Robert-Ncube/Diamond-Hills-Villa",
      },
      {
        name: "Live Demo",
        url: "https://main--diamondhillsvilla.netlify.app",
      },
    ],
    date: "2022-01-01",
  },
  {
    id: 4,
    title: "Robbie Ncube",
    description: "Portfolio",
    image: Robbie,
    links: [
      {
        name: "Github",
        url: "https://github.com/Robert-Ncube/RobbieNcube",
      },
    ],
    date: "2022-01-01",
  },
];

const page = () => {
  return (
    <Bounded className="w-full h-full min-h-screen pt-24 md:pt-28 text-slate-300">
      <Heading
        size="xl"
        className={
          "text-center md:text-start md:pt-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white border-b border-slate-600 py-4"
        }
      >
        <span>Projects</span>
      </Heading>
      <p className="py-4 px-8 border-b border-slate-600">
        I'm currently working on a few projects that I'm proud of. Here are a
        few of my recent works.
      </p>
      <div className="py-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-4">
        {projects && projects.length > 0 ? (
          projects.map((project, idx) => (
            <Project project={project} key={idx} />
          ))
        ) : (
          <p className="text-center text-xl">No projects posted yet.</p>
        )}
      </div>
    </Bounded>
  );
};

export default page;
