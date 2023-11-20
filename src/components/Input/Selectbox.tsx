"use client";

import { useState, FC } from "react";
import Image from "next/image";
import clsx from "clsx";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Selectbox: FC = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const selectedMuscle = searchParams.get("muscle");

  const handleSelect = (muscle: string) => {
    const params = new URLSearchParams(searchParams);
    if (muscle) {
      params.set("muscle", muscle);
    } else {
      params.delete("muscle");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleRemoveFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("muscle");
    replace(`${pathname}?${params.toString()}`);
  };

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
    <div className="relative w-full h-full gap-6 border-left">
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

      {/* Select Values Modal */}
      <div
        className={clsx(
          isBoxOpen ? "flex" : " hidden",
          "absolute w-full flex-col top-24 h-fit border-bottom 2xl:border-r-0 border-left bg-white "
        )}>
        {/* Clear Filter Button */}
        <span
          className={clsx(
            selectedMuscle ? "bg-red-200" : "opacity-20",
            "px-2 py-6 font-extrabold  cursor-pointer text-center"
          )}
          onClick={() => handleRemoveFilter()}>
          حذف فیلتر
        </span>
        <ul className="flex flex-wrap border-top gap-[1px] bg-borderColor">
          {muscles.map((muscle, index) => (
            <li
              className={clsx(
                selectedMuscle === muscle
                  ? "text-neutral-800 bg-purple-100"
                  : "text-neutral-500 bg-white",
                "cursor-pointer px-8 py-4 grow justify-center flex items-center hover:bg-neutral-100"
              )}
              onClick={() => handleSelect(muscle)}
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
