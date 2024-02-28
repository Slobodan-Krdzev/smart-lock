import React from "react";
import LockItem from "./LockItem";
import { LockType } from "@/app/Types/types";
import { faBatteryThreeQuarters, faCreditCard, faFingerprint, faKey, faLanguage, faLock, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

export const locks: LockType[] = [
  {
    id: 1,
    title: "F8-TX",
    image: "https://i.imgur.com/lhgXnJf.png",
    desc: [
      {
        title: 'Fingerprint',
        icon: faFingerprint
      },
      {
        title: 'Password',
        icon: faKey
      },
      {
        title: 'Key',
        icon: faKey
      },
      {
        title: 'Card',
        icon: faCreditCard
      },
      {
        title: 'Mobile Control',
        icon: faMobileScreen
      },
      {
        title: 'Battery Reminder',
        icon: faBatteryThreeQuarters
      },
      {
        title: 'Lock Body',
        icon: faLock
      },
      {
        title: 'English Preset',
        icon: faLanguage
      }
    ],
  },
  {
    id: 2,
    title: "D10",
    image: "https://i.imgur.com/hCXy2VY.png",
    desc: [
      {
        title: 'Fingerprint',
        icon: faFingerprint
      },
      {
        title: 'Password',
        icon: faKey
      },
      {
        title: 'Key',
        icon: faKey
      },
      {
        title: 'Card',
        icon: faCreditCard
      },
      {
        title: 'Tuya Smart - Mobile',
        icon: faMobileScreen
      },
      {
        title: 'Battery Reminder',
        icon: faBatteryThreeQuarters
      },
      {
        title: 'Lock Body',
        icon: faLock
      },
      {
        title: 'English Preset',
        icon: faLanguage
      }
    ],
  },
  {
    id: 3,
    title: "Q1 - Ball Lock",
    image: "https://i.imgur.com/KwUljh3.png",
    desc: [
      {
        title: 'Fingerprint',
        icon: faFingerprint
      },
      {
        title: 'Password',
        icon: faKey
      },
      {
        title: 'Key',
        icon: faKey
      },
      {
        title: 'Card',
        icon: faCreditCard
      },
      {
        title: 'Tuya Smart - Mobile',
        icon: faMobileScreen
      },
      {
        title: 'Battery Reminder',
        icon: faBatteryThreeQuarters
      },
      {
        title: 'Lock Body',
        icon: faLock
      },
      {
        title: 'English Preset',
        icon: faLanguage
      }
    ],
  },
  {
    id: 4,
    title: "Face 1",
    image: "https://i.imgur.com/2geCyBS.png",
    desc: [
      {
        title: 'Fingerprint',
        icon: faFingerprint
      },
      {
        title: 'Password',
        icon: faKey
      },
      {
        title: 'Key',
        icon: faKey
      },
      {
        title: 'Card',
        icon: faCreditCard
      },
      {
        title: 'Tuya Smart - Mobile',
        icon: faMobileScreen
      },
      {
        title: 'Battery Reminder',
        icon: faBatteryThreeQuarters
      },
      {
        title: 'Lock Body',
        icon: faLock
      },
      {
        title: 'English Preset',
        icon: faLanguage
      }
    ],
  },
  {
    id: 5,
    title: "Face 2",
    image: "https://i.imgur.com/NS4CUOy.png",
    desc: [
      {
        title: 'Fingerprint',
        icon: faFingerprint
      },
      {
        title: 'Password',
        icon: faKey
      },
      {
        title: 'Key',
        icon: faKey
      },
      {
        title: 'Card',
        icon: faCreditCard
      },
      {
        title: 'Tuya Smart - Mobile',
        icon: faMobileScreen
      },
      {
        title: 'Battery Reminder',
        icon: faBatteryThreeQuarters
      },
      {
        title: 'Lock Body',
        icon: faLock
      },
      {
        title: 'English Preset',
        icon: faLanguage
      }
    ],
  },
  {
    id: 6,
    title: "Face 3",
    image: "https://i.imgur.com/AWiyqrz.png",
    desc: [
      {
        title: 'Fingerprint',
        icon: faFingerprint
      },
      {
        title: 'Password',
        icon: faKey
      },
      {
        title: 'Key',
        icon: faKey
      },
      {
        title: 'Card',
        icon: faCreditCard
      },
      {
        title: 'Tuya Smart - Mobile',
        icon: faMobileScreen
      },
      {
        title: 'Battery Reminder',
        icon: faBatteryThreeQuarters
      },
      {
        title: 'Lock Body',
        icon: faLock
      },
      {
        title: 'English Preset',
        icon: faLanguage
      }
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
