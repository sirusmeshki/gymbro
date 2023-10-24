import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Tip from "./Tip";
import Buttons from "./Buttons";
import Header from "./Header";

const DesktopNav: FC = () => {
  return (
    <section className="flex justify-center items-center shadow-bottom">
      <Link href="/" className="w-full h-full flex justify-center items-center">
        <Image
          src="/Logo.svg"
          alt="logo"
          className="w-fit h-fit"
          width={100}
          height={100}
          priority
        />
      </Link>
      <Buttons />
      <Tip className="hidden xl:h-[176px] xl:flex shadow-right" />
    </section>
  );
};

export default DesktopNav;
