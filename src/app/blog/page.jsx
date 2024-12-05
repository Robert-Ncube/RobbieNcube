"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import MainList from "@/slices/MainList";
import React from "react";

import hoverImage from "@/assets/images/table.jpg"; // Adjust the path as necessary

import { blogPosts } from "@/config/data";

const page = () => {
  return (
    <Bounded className="w-full h-full min-h-screen pt-24 md:pt-28 text-slate-300">
      <Heading
        size="xl"
        className={
          "text-center md:text-start md:pt-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white py-4"
        }
      >
        <span>Blog</span>
      </Heading>
      <p className="py-6 px-8 border-t border-slate-400">
        Im always looking for new stories and insights to share with my readers.
        Im here to help you explore the world of technology and inspire you to
        take action. Stay tuned!
      </p>
      <MainList
        items={blogPosts}
        hoverImage={hoverImage}
        colorO={""}
        className={
          "m-2 border border-orange-600 text-xs py-4 rounded-lg p-1 text-orange-200 hover:bg-slate-900 px-6"
        }
      />
    </Bounded>
  );
};

export default page;
