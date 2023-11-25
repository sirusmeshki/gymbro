"use client";

import clsx from "clsx";
import Image from "next/image";
import { FC, useState } from "react";

type AccordionProps = {
  title: string;
  children: JSX.Element[];
};

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <li className="border-bottom">
      <header
        className="flex items-center justify-between gap-1 py-8 cursor-pointer px-5"
        onClick={() => setIsOpen((prev) => !prev)}>
        <h5 className="text-base font-bold text-neutral-800">{title}</h5>
        <Image
          width={24}
          height={24}
          src="/icon/arrow.svg"
          alt="arrow icon"
          className={clsx(isOpen && "rotate-180")}
        />
      </header>
      <div
        className={clsx(
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          "grid transition-all"
        )}>
        <div className="overflow-hidden text-xs font-normal leading-5 sm:text-sm text-neutral-400">
          {children}
        </div>
      </div>
    </li>
  );
};

export default Accordion;
