"use client";

import React, { useState } from "react";
import Image from "next/image";

import vscode from "@/assets/icons/code.png";
import terminal from "@/assets/icons/terminal.png";
import fruitloops from "@/assets/icons/fruitloops.png";
import word from "@/assets/icons/word.png";
import krita from "@/assets/icons/krita.png";
import blender from "@/assets/icons/blender.png";
import figma from "@/assets/icons/figma.png";
import wordpress from "@/assets/icons/wordpress.png";

import instagram from "@/assets/icons/instagram.png";
import linkedin from "@/assets/icons/linkedin.png";
import tiktok from "@/assets/icons/tiktok.png";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";
import threads from "@/assets/icons/threads.png";
import youtube from "@/assets/icons/youtube.png";
import Link from "next/link";

const Tools = () => {
  const toolsStackData = [
    { name: "VS Code", image: vscode },
    { name: "Terminal", image: terminal },
    { name: "Fruit Loops", image: fruitloops },
    { name: "Microsoft Word", image: word },
    { name: "Krita", image: krita },
    { name: "Blender", image: blender },
    { name: "Figma", image: figma },
    { name: "WordPress", image: wordpress },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="">
        <h2 className="text-2xl font-extrabold text-gray-600">
          More Tools I use
        </h2>
        <div className="grid w-full grid-cols-4 gap-4 pt-5 border-t border-gray-400">
          {toolsStackData.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center text-gray-600"
            >
              <Image
                className="w-16 h-16 object-cover object-center rounded-full"
                src={tool.image}
                alt={tool.name}
                quality={100}
                width={100}
                height={100}
              />
              <p className="text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Socials = () => {
  const socialsStackData = [
    {
      name: "Instagram",
      image: instagram,
      path: "https://www.instagram.com/its.robbiencube/",
    },
    {
      name: "Linkedin",
      image: linkedin,
      path: "https://www.linkedin.com/in/robert-ncube/",
    },
    {
      name: "Tik Tok",
      image: tiktok,
      path: "https://www.tiktok.com/@robbiencube",
    },
    {
      name: "Facebook",
      image: facebook,
      path: "https://www.facebook.com/its.robbiencube/",
    },
    {
      name: "X",
      image: twitter,
      path: "https://x.com/robbiencube",
    },
    {
      name: "Threads",
      image: threads,
      path: "https://www.threads.net/@its.robbiencube",
    },
    {
      name: "Youtube",
      image: youtube,
      path: "https://www.youtube.com/@robbiencube",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="">
        <h2 className="text-2xl font-extrabold text-gray-600">My Socials</h2>
        <div className="grid w-full grid-cols-4 gap-6 pt-5 border-t border-gray-400">
          {socialsStackData.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center text-gray-600"
            >
              <Link href={tool.path}>
                <Image
                  className="w-16 h-16 object-cover object-center rounded-full"
                  src={tool.image}
                  alt={tool.name}
                  quality={100}
                  width={100}
                  height={100}
                />
              </Link>
              <p className="text-sm font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const More = () => {
  const [activeTab, setActiveTab] = useState("tools");

  const renderContent = () => {
    switch (activeTab) {
      case "socials":
        return <Socials />;
      case "tools":
        return <Tools />;
      default:
        return <Socials />;
    }
  };

  return (
    <div className="about-section h-full p-4 shadow-sm shadow-gray-300 rounded-lg w-full max-w-lg">
      <div className="menu flex justify-around mb-4">
        <button
          className={`p-2 font-bold ${
            activeTab === "tools" ? "bg-gray-300 text-gray-950 rounded-lg" : ""
          }`}
          onClick={() => setActiveTab("tools")}
        >
          Tools
        </button>
        <button
          className={`p-2 font-bold ${
            activeTab === "socials" ? "bg-gray-300 rounded-lg" : ""
          }`}
          onClick={() => setActiveTab("socials")}
        >
          Socials
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default More;
