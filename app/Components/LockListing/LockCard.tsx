import { LockType } from "@/app/Types/types";
import Image from "next/image";

type LockCardProps = {
  index: number;
  lock: LockType;
};

const LockCard = ({ lock: { title, image, desc }, index }: LockCardProps) => {
  return (
    <div
      className={`py-8 md:py-8 ${
        index % 2 === 0 ? "text-color2" : "text-color2-bg text-color"
      }`}
    >
      <div className="m-auto w-full md:w-11/12 lg:w-6/12 flex flex-col md:flex-row justify-between items-center">
        <div
          className={`basis-full w-full md:basis-1/2 ${
            index % 2 === 0 ? "" : "order-2"
          }`}
        >
          <div
            className={`m-auto w-11/12 md:w-7/12 flex flex-col gap-4 text-center md:text-left ${
              index % 2 === 0 ? "" : "text-center md:text-end"
            }`}
          >
            <h3 className="text-5xl font-extrabold uppercase underline">
              {title}
            </h3>
            {/* <p className="text-2xl"></p> */}
            <ul className="p-0 text-lg lg:text-xl text-semibold list-disc marker:text-white">
              {desc.map((info, idx) => (
                <li
                  key={`${info}+${idx}`}
                  className="flex justify-between items-center"
                >
                  {info}
                  <Image
                    src={"https://i.imgur.com/qkngbTL.png"}
                    alt="CheckMark"
                    width={30}
                    height={30}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={"flex justify-start basis-full md:basis-1/2 relative"}>
          <svg
            viewBox="28 35 170 170"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
            style={
              {
                // left: '-50%'
              }
            }
          >
            <path
              fill={`${index % 2 === 0 ? "#2A2C38" : "#e9e9ea"}`}
              d="M35.2,-17.8C49,3.5,65.8,25.6,60.4,44.3C55,63,27.5,78.3,7,74.3C-13.5,70.2,-27,46.8,-37.3,25.2C-47.6,3.7,-54.8,-16.1,-48.1,-33.3C-41.3,-50.5,-20.7,-65.2,-5,-62.4C10.7,-59.5,21.5,-39,35.2,-17.8Z"
              transform="translate(100 100)"
            />
          </svg>
          <Image
            src={image}
            alt="Lock"
            width={400}
            height={600}
            style={{
              zIndex: 8000,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LockCard;
