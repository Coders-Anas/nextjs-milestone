import React from "react";

interface PageHeadingProps {
  text: string; // Correctly uses `string` instead of `String`
}

export default function PageHeading({ text }: PageHeadingProps) {
  return <h1 className="page-heading">{text}</h1>;
}
