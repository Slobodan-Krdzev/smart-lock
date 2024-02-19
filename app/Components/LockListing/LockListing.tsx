import { LockType } from "@/app/Types/types";
import LockCard from "./LockCard";

const locks: LockType[] = [
  {
    id: 1,
    title: "F8-TX",
    image: "https://i.imgur.com/lhgXnJf.png",
    desc: [
      "Fringerprint",
      "Password",
      "Mechanical Key",
      "Card",
      "Battery Reminder",
      "Tuya Smart",
      "Lock Body",
      "English Preset",
    ],
  },
  {
    id: 2,
    title: "D10",
    image: "https://i.imgur.com/hCXy2VY.png",
    desc: [
      "Fringerprint",
      "Password",
      "Mechanical Key",
      "Card",
      "Battery Reminder",
      "Waterproof",
      "Tuya Smart",
      "Lock Body",
      "English Preset",
    ],
  },
];

const LockListing = () => {
  return (
    <>
      <section className="m-auto w-full md:w-full pt-4 md:pt-8">
        <h2 className="text-3xl font-bold tracking-tighter m-auto w-11/12 md:w-9/12">
          Our Products
        </h2>
        <div className="">
            {locks.map((lock, idx:number) => <LockCard key={lock.id} lock={lock} index={idx}/>)}
        </div>
      </section>
    </>
  );
};

export default LockListing;
