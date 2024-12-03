import Link from "next/link";
import React from "react";

const Navlink = ({ path, title, onClick }) => {
  return (
    <Link
      href={path}
      onClick={onClick}
      title={title}
      className="block py-2 pl-3 pr-4 text-gray-400 sm:text-xl rounded-lg md:p-0 hover:text-white capitalize"
    >
      {title}
    </Link>
  );
};

export default Navlink;
