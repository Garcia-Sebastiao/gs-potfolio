import React from "react";

export default function Text({ className, children }) {
  return <p className={`${className} brightness-75 text-white leading-loose`}>{children}</p>;
}
