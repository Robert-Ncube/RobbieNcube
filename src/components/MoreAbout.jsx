import Image from "next/image";
import React from "react";
import image from "@/assets/images/moreabout.jpg";
import More from "./More";
import Link from "next/link";

const MoreAbout = () => {
  return (
    <section className="grid space-x-8 items-center justify-center grid-cols-1 md:grid-cols-2 my-6">
      <div className="">
        <Image
          src={image}
          alt="developer working on his table"
          className="h-full w-full object-cover   object-center max-h-96 md:max-h-[34rem] rounded-lg"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white py-5">
          More Info
        </h3>
        <div className="flex flex-row mt-5 ">
          <More />
        </div>
        <div className=" flex items-center pt-5 gap-6 md:flex-row flex-col">
          <Link href={"/projects"}>
            <button
              title="checkout my projects"
              className="bg-gradient-to-br from-orange-600 via-purple-600 to-white px-1 py-1 rounded-lg w-full sm:w-fit"
            >
              <span className="block bg-[#121212]  hover:bg-white hover:text-black rounded-lg px-4 py-2">
                Proceed To Projects
              </span>
            </button>
          </Link>
          <Link href={"/contact"}>
            <button
              title="contact me"
              className="bg-gradient-to-br from-orange-600 via-purple-600 to-white px-1 py-1 rounded-lg w-full sm:w-fit"
            >
              <span className="block bg-[#121212]  hover:bg-white hover:text-black rounded-lg px-4 py-2">
                Contact Me
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
