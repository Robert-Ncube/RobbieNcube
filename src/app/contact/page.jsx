import Image from "next/image";
import React from "react";
import image from "@/assets/images/contact.jpg";

import instagram from "@/assets/icons/instagram.png";
import linkedin from "@/assets/icons/linkedin.png";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

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
    name: "Facebook",
    image: facebook,
    path: "https://www.facebook.com/its.robbiencube/",
  },
  {
    name: "X",
    image: twitter,
    path: "https://x.com/robbiencube",
  },
];

const page = () => {
  return (
    <section className="text-white mt-20 flex flex-col gap-6 px-8 py-5">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 h-full min-h-screen">
        <div className="p-4 text-center flex flex-col gap-5">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600 ">
            Contact
          </h2>
          <p className="text-sm">
            Get in touch with me via my social media or send me an email: @
            <span className="font-bold text-blue-600 ">
              robertncube694@gmail.com
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            {socialsStackData?.map((social, idx) => (
              <Link
                href={social.path}
                key={idx}
                target="_blank"
                title={social.name}
                className="rounded-full w-fit hover:opacity-50 flex items-center justify-center bg-white"
              >
                <Image
                  src={social.image}
                  alt={social.name}
                  className="w-16 h-16 object-cover"
                  quality={100}
                  width={30}
                  height={30}
                />
              </Link>
            ))}
          </div>
        </div>
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
      </div>
      <div className="p-4 w-full border-t border-slate-400">
        <ContactForm />
      </div>
    </section>
  );
};

export default page;
