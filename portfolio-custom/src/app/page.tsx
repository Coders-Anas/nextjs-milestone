import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Image
            alt="user avatar"
            src={"/user-programming.png"}
            width={380}
            height={380}
          />
          <div className="page__text">
            <p className="page__text-title">
              I am <span className="page__text-highlight">Muhammad Anas</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              similique, aperiam quo voluptatem architecto voluptatum quas
              consectetur a? Commodi hic porro ex voluptatem ducimus itaque!
            </p>
            <div className="page__buttons">
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
