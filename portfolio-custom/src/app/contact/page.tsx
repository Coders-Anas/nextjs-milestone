import ContentWrapper from "@/components/ContentWrapper";
import PageHeading from "@/components/PageHeading";
import React from "react";
import { Mail, Phone } from "lucide-react";

export default function page() {
  return (
    <ContentWrapper>
      <PageHeading text="Contact" />
      <p className="mb-6 flex gap-3 items-center">
        <span className="btn btn-circle btn-accent">
          <Mail />
        </span>
        <a href="mailto:example@email.com">Example@email.com</a>
      </p>

      <p className="mb-6 flex gap-3 items-center">
        <span className="btn btn-circle btn-accent">
          <Phone />
        </span>
        <a href="#">+92 312 4567890</a>
      </p>

      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatem, sint veniam magnam reprehenderit deserunt at esse ipsam accusantium ut, similique perspiciatis molestiae? Tenetur impedit fugiat suscipit repudiandae culpa, cum blanditiis veniam placeat? Dolorem consequatur doloremque nulla iure distinctio possimus veritatis pariatur, quos quod ipsum doloribus laborum atque? Perferendis, quo!</p>

    </ContentWrapper>
  );
}
