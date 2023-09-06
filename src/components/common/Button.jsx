import React from "react";

export default function Button({
  children,
  className,
  onClick,
  href,
  download,
}) {
  return (
    <a
      href={href || "#"}
      onClick={onClick}
      download={download}
      className={`${className} px-8 py-3 font-poppinsMedium rounded-md text-center text-white flex items-center gap-2 transition duration-150 hover:brightness-75`}
    >
      {children}
    </a>
  );
}
