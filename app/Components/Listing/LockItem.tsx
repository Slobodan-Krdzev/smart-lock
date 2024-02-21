import { LockType } from "@/app/Types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type LockItemProps = {
  lock: LockType;
  index: number;
};

const LockItem = ({ lock: { title, desc, image }, index }: LockItemProps) => {
  return (
    <div className={`relative m-auto`}>
      <div className="m-auto w-full flex flex-col lg:flex-row justify-between gap-8 md:gap-10 lg:gap-12 items-center py-12">
        <div
          className={`w-full md:basis-1/2 flex items-center relative my-8 lg:my-0 ${
            index % 2 === 0 ? "justify-center lg:justify-end " : "order-2 justify-center justify-start"
          }`}
        >
          <Image
            src={image}
            alt={title}
            width={(title === "D10") ? 550 : 350}
            height={450}
            className="z-10"
          />

          {index % 2 !== 0 && (
            <div
              className="uniqueDiv rounded-l-3xl absolute right-0"
              
            ></div>
          )}
        </div>

        <div className={`basis-full md:basis-1/2 flex m-auto w-11/12 lg:w-full justify-center items-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
          <div className={`w-11/12 md:w-9/12 lg:w-7/12 flex flex-col gap-4 `}>
            <h2 className="uppercase font-semibold text-5xl tracking-tighter">
              {title}
            </h2>
            <p className="freedokaFont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quia quas aperiam, suscipit error possimus deserunt cupiditate
              doloremque aliquid maiores laboriosam ipsa accusantium nostrum sed
              similique laborum nemo sunt, libero facere numquam officia? Animi
              explicabo, eos hic itaque ut asperiores harum, dolores iure quia
              dicta aperiam commodi, expedita ratione voluptate?
            </p>
            <Link href={"/"} className="py-4 px-8 font-semibold uppercase bg w-fit rounded-full text-color border-2 hover:border-custom hover:text-custom hover:bg-bg-light transition-colors ease-in-out ">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockItem;
