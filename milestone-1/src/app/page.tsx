import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl text-teal-700 font-bold">Milestone - 1</h1>
        <h2 className="text-2xl font-semibold text-black/60">Made by: Muhammad Anas</h2>
        <div className="flex gap-4 items-center">
          <Image
            alt="user avatar"
            src={"/avatar.png"}
            width={280}
            height={280}
          />
          <div>
            <p className="text-4xl font-semibold">Hello World!</p>
            <p className="flex gap-3 text-4xl">
              I am
              <span className="italic text-teal-700 font-semibold">
                Muhammad Anas
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
