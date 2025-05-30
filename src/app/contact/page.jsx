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
          <p className="text-sm md:text-lg text-gray-300">
            I&apos;m always open to new opportunities and collaborations.
            Whether you have a project in mind, want to discuss ideas, or just
            want to say hello, I&apos;d love to hear from you! Feel free to
            reach out through the form below or directly via email.
          </p>
          <div className=" border border-white p-4 rounded-lg">
            <p className="text-sm">
              Get in touch with me via my social media or send me an email.
            </p>
            <p className="text-sm">
              Email:{" "}
              <span className="text-blue-600">robertncube694@gmail.com</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border border-white rounded-lg">
            {socialsStackData?.map((social, idx) => (
              <div
                className="w-full flex items-center justify-center px-2 py-4 md:py-6"
                key={idx}
              >
                <Link
                  href={social.path}
                  target="_blank"
                  title={social.name}
                  className="bg-white rounded-full p-1 hover:scale-105 transition-transform duration-300 flex items-center justify-center shadow-lg shadow-gray-500/50"
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
              </div>
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
