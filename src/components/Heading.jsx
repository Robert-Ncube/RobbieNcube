import React from "react";
import clsx from "clsx";

const Heading = ({ as: Comp = "h1", className, children, size = "lg" }) => {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight text-slate-300",
        size === "xl" && "text-7xl md:text-9xl",
        size === "lg" && "text-6xl md:text-8xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        className
      )}
    >
      {children}
    </Comp>
  );
};

export default Heading;
