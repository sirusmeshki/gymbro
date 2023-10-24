"use client";

import { useState, FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import clsx from "clsx";

type SelectboxProps = {
  selectedMuscle: string | null;
  setSelectedMuscle: Dispatch<SetStateAction<string>>;
};

const Selectbox: FC<SelectboxProps> = ({
  selectedMuscle,
  setSelectedMuscle,
}) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const muscles = [
    "سینه",
    "پا",
    "جلو بازو",
    "پشت بازو",
    "سرشانه",
    "زیربغل",
    "ساعد",
    "کول",
    "شکم",
    "ساق پا",
  ];

  return (
    <div className="relative w-full h-full gap-6 shadow-rb">
      <div
        onClick={() => setIsBoxOpen((prev) => !prev)}
        className="z-40 flex items-center justify-between w-full h-full cursor-pointer">
        <h6 className="mr-4 text-sm font-medium text-neutral-700">
          <span>عضله</span>
          <span>{selectedMuscle && `: ${selectedMuscle}`}</span>
        </h6>
        <Image
          width="0"
          height="0"
          className={clsx(
            isBoxOpen ? "rotate-180" : "",
            "w-4 h-4 ml-4 transition-all"
          )}
          alt="search icon"
          src="/icon/arrow.svg"
        />
      </div>
      <div
        className={clsx(
          isBoxOpen ? "flex" : " hidden",
          "absolute w-full flex-col top-24 h-fit shadow-rb bg-white mt-[1px]"
        )}>
        <span
          className={clsx(
            selectedMuscle ? "bg-red-200" : "opacity-20",
            "px-2 py-6 font-extrabold  cursor-pointer"
          )}
          onClick={() => {
            if (selectedMuscle) {
              setSelectedMuscle("");
            }
          }}>
          حذف فیلتر
        </span>
        <ul className="flex flex-wrap gap-[1px] bg-neutral-200 shadow-top">
          {muscles.map((muscle, index) => (
            <li
              className={clsx(
                selectedMuscle === muscle
                  ? "text-neutral-800 bg-purple-100"
                  : "text-neutral-500 bg-white",
                "cursor-pointer px-8 py-4 grow justify-center flex items-center"
              )}
              onClick={() => setSelectedMuscle(muscle)}
              key={index}>
              {muscle}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selectbox;
