import React from "react";
import LockItem from "./LockItem";
import { LockType } from "@/app/Types/types";

export const locks: LockType[] = [
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
  {
    id: 3,
    title: "Q1 - Ball Lock",
    image: "https://i.imgur.com/KwUljh3.png",
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
  {
    id: 4,
    title: "Face 1",
    image: "https://i.imgur.com/2geCyBS.png",
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
  {
    id: 5,
    title: "Face 2",
    image: "https://i.imgur.com/NS4CUOy.png",
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
  {
    id: 6,
    title: "Face 3",
    image: "https://i.imgur.com/AWiyqrz.png",
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
  }

];

const Listing = () => {
  return (
    <section>
      {locks.map((lock, idx:number) => (
        <LockItem key={lock.id} lock={lock} index={idx} />
      ))}
    </section>
  );
};

export default Listing;
