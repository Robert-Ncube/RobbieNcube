"use client";

import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

// Sample data array storing tech names and colors
const skillsData = [
  { name: "WebDev", color: "blue" },
  { name: "MobileDev", color: "green" },
  { name: "Music", color: "yellow" },
  { name: "Writting", color: "orange" },
  { name: "Acting", color: "purple" },
  // Add more as needed
];

const SkillsList = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section
      className="wrapper overflow-hidden border-b border-gray-500"
      ref={component}
    >
      <Bounded as="div" className="text-center">
        <Heading
          size="md"
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white mb-6 py-4"
          as="h2"
        >
          My Skills
        </Heading>
      </Bounded>

      {skillsData.map(({ name, color }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                }
                style={{
                  color: index === 7 ? color : "inherit",
                }}
              >
                {name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default SkillsList;
