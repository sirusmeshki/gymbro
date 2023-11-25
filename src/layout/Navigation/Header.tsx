import { FC } from "react";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center pr-4 h-24 border-bottom">
      <Image
        src="/Logo.svg"
        alt="logo"
        width={100}
        height={100}
        className="w-auto h-auto"
      />
      <Link className="w-[96px] h-full border-right" href="/workout">
        <Button
          icon="/icon/menu.svg"
          alt="menu icon"
          iconHeight={32}
          iconWidth={32}
          placeholder="تمرینات"
        />
      </Link>
    </header>
  );
};

export default Header;
