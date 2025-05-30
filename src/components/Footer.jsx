"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import instagram from "@/assets/icons/instagram.png";
import linkedin from "@/assets/icons/linkedin.png";
import tiktok from "@/assets/icons/tiktok.png";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";
import threads from "@/assets/icons/threads.png";
import youtube from "@/assets/icons/youtube.png";
import Link from "next/link";
import Image from "next/image";

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

const Footer = () => {
  useEffect(() => {
    gsap.to(".gradient-bg", {
      background: "linear-gradient(to right, #ffa500, #da70d6, #ffffff)",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);

  return (
    <footer className="bg-[#121212] border-t border-slate-500 p-4 text-slate-100 flex flex-col items-center justify-center">
      {/* "Designed and Developed by me!" and other elements */}
      <div className="py-4 text-center">
        <p className="text-xs text-slate-400">Designed and Developed by me!</p>
        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white">
          Robbie Ncube
        </span>
      </div>
      {/* Social media icons */}
      <div className="border-b border-slate-400 h-24 w-full relative gradient-bg">
        <div className="border bg-slate-600 p-6 flex flex-col items-center justify-center h-24 w-full max-w-sm absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 gap-4">
          <span className="text-xs text-slate-200">Follow me on:</span>
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {socialsStackData.map((social, idx) => (
              <Link
                href={social.path}
                key={idx}
                target="_blank"
                className="p-2 rounded-full hover:bg-slate-200 flex items-center justify-center"
              >
                <Image
                  src={social.image}
                  alt={social.name}
                  className="w-6 h-6 object-cover"
                  quality={100}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center w-full mt-24 py-4 border-t border-slate-400">
        <p className="text-sm text-slate-400">
          &copy; Copyright 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
