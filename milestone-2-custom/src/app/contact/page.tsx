import ContentWrapper from "@/components/ContentWrapper";
import PageHeading from "@/components/PageHeading";
import React from "react";
import { Mail, Phone } from "lucide-react";

export default function page() {
  return (
    <ContentWrapper>
      <PageHeading text="Contact" />
      <p className="contact">
        <span className="contact__icon">
          <Mail />
        </span>
        <a className="contact__text" href="mailto:example@email.com">
          Example@email.com
        </a>
      </p>

      <p className="contact">
        <span className="contact__icon">
          <Phone />
        </span>
        <a className="contact__text" href="#">
          +92 312 4567890
        </a>
      </p>

      <p className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        voluptatem, sint veniam magnam reprehenderit deserunt at esse ipsam
        accusantium ut, similique perspiciatis molestiae? Tenetur impedit fugiat
        suscipit repudiandae culpa, cum blanditiis veniam placeat? Dolorem
        consequatur doloremque nulla iure distinctio possimus veritatis
        pariatur, quos quod ipsum doloribus laborum atque? Perferendis, quo!
      </p>
    </ContentWrapper>
  );
}
