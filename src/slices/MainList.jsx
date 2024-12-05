import React from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const MainList = ({ items, hoverImage }) => {
  return (
    <div>
      <ul
        className={`grid ${
          items.length > 0 ? "border-b" : ""
        } border-b-slate-100`}
      >
        {items && items?.length > 0 ? (
          items?.map((item, index) => (
            <li
              key={index}
              className="list-item hover:bg-slate-900 px-6 rounded-lg"
            >
              <Link
                href={`/blog/details?id=${item.id}`}
                className="flex flex-col justify-between border-t border-t-slate-100 py-6 md:flex-row gap-6"
              >
                <div className="flex flex-col">
                  <span className="text-3xl font-bold mb-8 text-center md:text-start md:pt-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white">
                    {item?.title}
                  </span>
                  <div className="flex items-center py-2 gap-5 text-orange-200 font-xs font-bold">
                    {item?.tags.map((tag, idx) => (
                      <h4
                        className="border border-slate-400 p-1 rounded-md"
                        key={idx}
                      >
                        {tag}
                      </h4>
                    ))}
                  </div>
                </div>
                <span className="hidden md:flex">
                  <Image
                    src={hoverImage}
                    alt="Hero image"
                    className=" w-full h-full object-cover object-center rounded-lg"
                    quality={100}
                    width={120}
                    height={120}
                  />
                </span>
              </Link>
            </li>
          ))
        ) : (
          <div className="text-center border-2 my-auto rounded-lg border-slate-400 p-6 mt-1/2">
            <h3 className="text-xl text-slate-500">No blogs posted yet!</h3>
            <p className="text-xs text-slate-600">
              Subscribe to my newsletter for new updates!
            </p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default MainList;
