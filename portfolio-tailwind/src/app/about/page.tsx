import ContentWrapper from "@/components/ContentWrapper";
import PageHeading from "@/components/PageHeading";
import React from "react";

export default function page() {
  return (
    <>
      <ContentWrapper>
        <PageHeading text="About" />
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          fugit qui placeat error maxime, eos animi odit magni consequatur totam
          architecto nostrum quas dolorum esse aut! Dolore odit sint vitae quia
          vero excepturi blanditiis dicta voluptas quisquam dignissimos nulla
          porro iusto doloremque assumenda ut tempore, optio amet atque ducimus.
          Omnis.
        </p>
      </ContentWrapper>
    </>
  );
}
