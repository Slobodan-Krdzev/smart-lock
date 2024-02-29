import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

type FormPropsType = {
  lang: any;
};

const Form = ({ lang }: FormPropsType) => {
  return (
    <section
      className="py-8 lg:py-16 "
      id="form"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="m-auto w-11/12 lg:w-8/12 flex justify-between items-center gap-x-4 basis-1/2">
        <div>
          <Image
            src={"https://i.imgur.com/z2TvdgM.png"}
            alt="Logo"
            width={400}
            height={200}
            className="rounded-full shadow-xl"
          />
          <h2 className="text-center my-8 text-4xl lg:text-6xl uppercase font-semibold text-custom">
            Contact Us!
          </h2>
          <p className="text-center text-2xl lg:text-4xl font-medium text-custom">
            Let`s get in touch!
          </p>
        </div>
        <div className="basis-1/2 flex justify-center">
          <ContactForm lang={lang} />
        </div>
      </div>
    </section>
  );
};

export default Form;
