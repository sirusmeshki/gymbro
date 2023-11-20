import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Tip from "./Tip";
import Buttons from "./Buttons";

const DesktopNav: FC = () => {
  return (
    <section className="flex flex-col justify-center items-center border-bottom">
      <Tip className="border-b" />
      <div className="w-full flex justify-center items-center border-top">
        <Link
          href="/"
          className="w-full max-w-[480px] flex justify-center items-center md:h-[176px] border-left">
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
      </div>
    </section>
  );
};

export default DesktopNav;
