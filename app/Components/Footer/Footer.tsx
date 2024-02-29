import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";

const Footer = async ({ lang }: any) => {
  const page = await getDictionary(lang);
  return (
    <footer className="bg-custom py-4">
      <div className="m-auto w-11/12 lg:w-9/12 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="hidden lg:block">
          <Image
            src={"https://i.imgur.com/z2TvdgM.png"}
            alt="Logo"
            width={200}
            height={100}
          />
        </div>

        <div className="text-white">
          <h2 className="font-semibold text-xl">{page.footer.contact}</h2>
          <p className="font-semibold text-xl">{page.footer.name}</p>
    <p>CHANGE</p>
          <a href="tel:+38972277766" className="font-semibold block">
            {page.footer.tel} <span className="underline">+38972277766</span>
          </a>
          <a
            href="mailto:contact.smartlocks@gmail.com"
            className="font-semibold block"
          >
            {page.footer.email}{" "}
            <span className="underline">contact.smartlocks@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
