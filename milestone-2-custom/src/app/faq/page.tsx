import ContentWrapper from "@/components/ContentWrapper";
import PageHeading from "@/components/PageHeading";
import React from "react";

export default function page() {
  return (
    <>
      <ContentWrapper>
        <PageHeading text="FAQ's" />
        <section className="faq">
          <div className="faq__item">
            <h4 className="faq__question">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              quod?
            </h4>
            <p className="faq__answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              tempore voluptatibus eligendi. Expedita inventore labore qui enim
              eius quaerat placeat corporis! Explicabo debitis eveniet placeat
              assumenda adipisci repudiandae nemo voluptas autem. Dolores sequi
              dolor id eveniet! Repudiandae quidem ipsum, quod nemo perspiciatis
              numquam voluptatum neque. Animi deleniti atque eius magnam.
            </p>
          </div>

          <div className="faq__item">
            <h4 className="faq__question">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              quod?
            </h4>
            <p className="faq__answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              tempore voluptatibus eligendi. Expedita inventore labore qui enim
              eius quaerat placeat corporis! Explicabo debitis eveniet placeat
              assumenda adipisci repudiandae nemo voluptas autem. Dolores sequi
              dolor id eveniet! Repudiandae quidem ipsum, quod nemo perspiciatis
              numquam voluptatum neque. Animi deleniti atque eius magnam.
            </p>
          </div>

          <div className="faq__item">
            <h4 className="faq__question">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              quod?
            </h4>
            <p className="faq__answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              tempore voluptatibus eligendi. Expedita inventore labore qui enim
              eius quaerat placeat corporis! Explicabo debitis eveniet placeat
              assumenda adipisci repudiandae nemo voluptas autem. Dolores sequi
              dolor id eveniet! Repudiandae quidem ipsum, quod nemo perspiciatis
              numquam voluptatum neque. Animi deleniti atque eius magnam.
            </p>
          </div>
        </section>
      </ContentWrapper>
    </>
  );
}
