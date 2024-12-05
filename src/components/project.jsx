import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ project }) => {
  return (
    <div className="flex flex-col rounded-lg bg-slate-800  border-2 border-slate-400 w-full max-w-sm mx-auto">
      <Image
        src={project?.image}
        alt="Hero image"
        className="object-cover rounded-t-lg object-center w-full"
        quality={100}
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center justify-center py-3">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-purple-600 to-white">
          {project?.title}
        </h3>
        <p className="text-xs text-white">{project?.description}</p>
        <div className="flex items-center py-2 gap-5 text-orange-200 font-xs font-bold">
          {project?.links?.map((link, idx) => (
            <Link
              href={link?.url}
              title={link?.name}
              className="border border-slate-400 p-1 rounded-md hover:bg-slate-400 hover:text-slate-50"
              target="_blank"
              rel="noopener noreferrer"
              key={idx} // Added key for each Link
            >
              {link?.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
