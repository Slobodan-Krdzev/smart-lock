"use client";
import { useForm } from "@formspree/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type ContactFormType = {
  lang: any;
};

const ContactForm = ({ lang }: ContactFormType) => {
  const pathname = usePathname();

  const [state, handleSubmit] = useForm("mrgwnngw");
  const [phoneNum, setPhoneNum] = useState("");

  const country = pathname.split("/")[1];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
        setPhoneNum('')
        e.currentTarget.reset();
      }}
    >
      <div className="flex justify-between gap-x-4">
        <div className="mb-4 flex flex-col">
          <label className="text-custom font-semibold" htmlFor="name">
            {Boolean(country === 'en') ? "Your Name *" : "Вашето Име *"}
          </label>
          <input
            required
            type="text"
            id="name"
            className="py-2 px-4 rounded-md border-custom inputs shadow-xl"
            name="name"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-custom font-semibold" htmlFor="email">
          {Boolean(country === 'en') ? "Your Емаил *" : "Вашиот Email *"}

          </label>
          <input
            required
            type="email"
            id="email"
            className="py-2 px-4 rounded-md inputs shadow-xl"
            name="email"
          />
        </div>
      </div>

      <div className="flex justify-between gap-x-4">
        <div className="mb-4 flex flex-col">
          <label className="text-custom font-semibold" htmlFor="tel">
          {Boolean(country === 'en') ? "Your Phone Number *" : "Телефонски Број *"}
            
          </label>
          <PhoneInput
            onChange={(e) => setPhoneNum}
            country={country === "en" ? "mk" : country}
            value={phoneNum}
            preferredCountries={["mk", "al", "bg", "rs", "ba", "xk"]}
            inputProps={{
              name: "tel",
              required: true,
            }}
            containerClass='phoneContainer'
            inputClass='inputPhoneContainer'
            containerStyle={{
              flexBasis: '100%',
              width: '100%',
              border: '2px solid #526AC2',
              borderRadius: '0.4rem'  
            }}
            inputStyle={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            onBlur={(e: any) => {
              setPhoneNum(e.target.value);
            }}
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-custom font-semibold" htmlFor="company">
          {Boolean(country === 'en') ? "Company*" : "Вашата Компанија"}

          </label>
          <input
            type="text"
            id="company"
            className="py-2 px-4 rounded-md inputs shadow-xl"
            name="company"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-custom font-semibold" htmlFor="message">
        {Boolean(country === 'en') ? "Leave a Message" : "Оставете Порака"}

        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="p-4 rounded-md w-full inputs shadow-xl mb-4"
        ></textarea>
      </div>
      <p className="mb-4 text-sm italic text-custom">{Boolean(country === 'en') ? "Fields with * are required!" : "Полињата со * се задолжителни!"}</p>
      <button
        type="submit"
        style={{
          color: "white",
        }}
        className="py-4 px-8 font-semibold uppercase rounded-full shadow-md btn w-full">
            {Boolean(country === 'en') ? "Submit" : "Испрати"}
      </button>
    </form>
  );
};

export default ContactForm;
