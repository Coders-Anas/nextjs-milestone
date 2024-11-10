import React from 'react';

interface PageHeadingProps {
  text: string;  // Correctly uses `string` instead of `String`
}

export default function PageHeading({ text }: PageHeadingProps) {
  return (
    <h1 className="mb-6 text-4xl font-bold text-center text-teal-500">{text}</h1>
  );
}
