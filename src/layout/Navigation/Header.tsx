import { FC } from "react";

import Image from "next/image";
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
      <Button
        className="max-w-[96px] h-full"
        icon="/icon/menu.svg"
        alt="menu icon"
        iconHeight={32}
        iconWidth={32}
        placeholder="تمرینات"
      />
    </header>
  );
};

export default Header;
