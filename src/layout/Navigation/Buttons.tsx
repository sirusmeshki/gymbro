import { FC } from "react";

import clsx from "clsx";

import Button from "@/components/Button";

import Link from "next/link";
import Image from "next/image";

import { useSelectedLayoutSegment } from "next/navigation";

interface ButtonsProps {
  className?: string;
}

const Buttons: FC<ButtonsProps> = ({ className }) => {
  const activeSegment = useSelectedLayoutSegment();

  const buttons = [
    {
      href: "/",
      icon: "/icon/home.svg",
      placeholder: "خانه",
      activeSegment: null,
    },
    {
      href: "/moves",
      icon: "/icon/weight.svg",
      placeholder: "حرکات",
      activeSegment: "moves",
    },
    {
      href: "/scan",
      icon: "/icon/QRCode.svg",
      placeholder: "اسکن",
      activeSegment: "scan",
    },
    {
      href: "/user",
      icon: "/icon/user.svg",
      placeholder: "حساب کاربری",
      activeSegment: "user",
    },
  ];

  return (
    <ul
      className={clsx(
        `
        flex
        justify-center
        items-center
        bg-white
        w-full
        h-20
        sm:h-24
        md:h-32
        lg:h-44
        border-top
        lg:border-none
        `,
        className && className
      )}>
      {buttons.map((button, index) => (
        <li key={index} className="w-full h-full">
          <Link className={clsx(`w-full h-full lg:w-60`)} href={button.href}>
            <Button
              className={clsx(
                activeSegment === button.activeSegment ? "bg-lightBlue" : "",
                "border-left"
              )}
              placeholder={button.placeholder}
              icon={button.icon}
              alt={button.href}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Buttons;
