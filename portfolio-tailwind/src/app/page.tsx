import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="pt-24 min-h-[550px] flex flex-col items-center">
        <div className="flex gap-4 flex-row-reverse items-center max-w-4xl">
          <Image
            alt="user avatar"
            src={"/user-programming.png"}
            width={380}
            height={380}
          />
          <div className="flex flex-col gap-6">
            <p className="flex gap-3 text-4xl">
              I am
              <span className="italic text-teal-500 font-semibold">
                Muhammad Anas
              </span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              similique, aperiam quo voluptatem architecto voluptatum quas
              consectetur a? Commodi hic porro ex voluptatem ducimus itaque!
            </p>
            <div className="flex gap-3">
              <button className="btn btn-accent">Primary Button</button>
              <button className="btn btn-neutral btn-outline">
                Secondary Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
